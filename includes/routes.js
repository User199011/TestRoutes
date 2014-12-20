
	// configure our routes
    app.config(function($routeProvider, $locationProvider) {
	
	
		
        $routeProvider

            // route for the home page
            .when('/home', {
                controller  : 'ApplicationController',
                templateUrl : './includes/home/home.html',
            })

			
			.otherwise({redirectTo : '/home'});
			
		// use the HTML5 History API
		$locationProvider.html5Mode(true);

    });
