(function() {
    
    var app = angular.module('traitsApp', ['ngRoute']);
    
    app.constant('myConfig', {
        ver : 'alpha-0-1'});

    /**
    * A generic confirmation for risky actions.
    * Usage: Add attributes: ng-really-message="Are you sure"? ng-really-click="takeAction()" function
    * Credit: https://gist.github.com/asafge/7430497
    */
    app.directive('ngReallyClick', [function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    var message = attrs.ngReallyMessage;
                    if (message && confirm(message)) {
                        scope.$apply(attrs.ngReallyClick);
                        }
                    });
                }
            }
        }
    ]);
    
    app.config(function($routeProvider, myConfig) {
        $routeProvider
            .when('/', {
                controller: 'MenuController',
                templateUrl: 'templates/menu.html'
            })
            .when('/traits', {
                controller: 'TraitsController',
                templateUrl: 'app/templates/traits.html'
            })
            .when('/gear', {
                controller: 'GearController',
                templateUrl: 'app/templates/gear.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());