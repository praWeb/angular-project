/*
 * INSTRUCTIONS
 * Add all your routes here. Please follow the SAME STRUCTURE with PROPER INDENTATION.
 * Before adding a route please check whether it's app name is already added.
 */
define([],function() {
	return {
		defaultRoutePaths : '/workspaces/user',
		routes : {
			// Login
			'/manoj' : {								// loginRemoveSM
				templateUrl : 'apps/view/index.html', 		// loginRemoveSM
				controller : 'mainController', 				// loginRemoveSM
				dependencies : [   						// loginRemoveSM
					'scripts/mainController.js',
					{style : "styles/login"} 			// loginRemoveSM
				]										// loginRemoveSM
			}


		}// routes end
	}; // return statement end
});
