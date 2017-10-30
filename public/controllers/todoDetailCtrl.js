angular.module('app')
    .controller('TodoDetailCtrl', ['$scope', '$routeParams', 'Todos', '$location', function ($scope, $routeParams, Todos, $location) {
          $scope.todo = Todos.get({id: $routeParams.id });

          $scope.remove = function(){
            Todos.remove({id: $scope.todo._id}, function(){
              $location.url('/');
            });
          }
    }]);