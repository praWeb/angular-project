define(['scripts/appRoutes','scripts/dependencyResolverFor'], function(config,dependencyResolverFor){
    var app = angular.module('TestApp', ['ui', 'ngResource', 'ngCookies','ngRoute']);

    // configure our routes
   app.config([
        '$routeProvider',
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        '$httpProvider',
    function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider) {
                app.lazy =
            {
                controller : $controllerProvider.register,
                directive  : $compileProvider.directive,
                filter     : $filterProvider.register,
                factory    : $provide.factory,
                service    : $provide.service,
                provider   : $provide.provider,
                value      : $provide.value,
                constant   : $provide.constant
            };


            if(config.routes !== undefined)
            {
                angular.forEach(config.routes, function(route, path)
                {
					$routeProvider.when(path, {templateUrl:route.templateUrl, controller:route.controller ,resolve:dependencyResolverFor(route.dependencies)});
                });
            }

            //initialize get if not there
            if (!$httpProvider.defaults.headers.get) {
                $httpProvider.defaults.headers.get = {};
            }

            //disable IE ajax request caching
            $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';

            $httpProvider.defaults.withCrendentials = true;
            $httpProvider.defaults.useXDomain = true;

            $httpProvider.defaults.transformRequest.push(function(data, headerGetter){
                return data;
            })

        /*$routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'apps/view/index.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });*/
    }]);

	return app;
});
    // create the controller and inject Angular's $scope
       