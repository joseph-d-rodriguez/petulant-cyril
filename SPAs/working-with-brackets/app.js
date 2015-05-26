var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
    $scope.occupation='coder';
    console.log($scope);
});

var searchPeople = function(firstname, lastname, height, age, occupation) {
    return 'jane doe';
}

console.log(angular.injector().annotate(searchPeople));