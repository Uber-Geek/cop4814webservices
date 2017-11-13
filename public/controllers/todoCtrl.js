
angular.module('app')
    .controller('TodoController', ['$scope', 'Todos', function ($scope, Todos) {
        $scope.editing = [];
        $scope.todos = Todos.query();

        $scope.save = function(){
            if(!$scope.newTodo || $scope.newTodo.length < 1) return;
            var todo = new Todos({ name: $scope.newTodo, completed: false });

            todo.$save(function(){
                $scope.todos.push(todo);
                $scope.newTodo = ''; // clear textbox
            });
        }



        $scope.edit = function(index){
            $scope.editing[index] = angular.copy($scope.todos[index]);
        }

        $scope.cancel = function(index){
            $scope.todos[index] = angular.copy($scope.editing[index]);
            $scope.editing[index] = false;
        }

        $scope.remove = function(index){
            var todo = $scope.todos[index];
            Todos.remove({id: todo._id}, function(){
                $scope.todos.splice(index, 1);
            });
        }
    }]);