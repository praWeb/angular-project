require.config({
    baseUrl: '',
    paths: {

    },
    shim: {

    },
    waitSeconds: 30,
    map: {}
});
    require(['scripts/appModule'],function(app) {
        angular.bootstrap(document.documentElement, ["TestApp"]);
    });