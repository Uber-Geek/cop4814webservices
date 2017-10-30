      angular.module('app', ['ngRoute', 'ngResource'])
      
        .factory('Todos', ['$resource', function($resource){
          return $resource('/todos/:id', null, {
            'update': { method:'PUT' }
          });
        }])

        //---------------
        // Routes
        //---------------

        .config(['$routeProvider', function ($routeProvider) {
          $routeProvider
            .when('/', {
              templateUrl: '/todos.html',
              controller: 'TodoController'
            })

            .when('/:id', {
              templateUrl: '/todoDetails.html',
              controller: 'TodoDetailCtrl'
           });
        }]);
