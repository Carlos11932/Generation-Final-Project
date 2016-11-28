(function() {
	var app = angular.module('myApp', ['ngRoute']);
  var ENDPOINT = "data/building.json";

  app.config(['$routeProvider',
      function($routeProvider) {
      $routeProvider
        .when('/',{
          templateUrl: './views/index.html'
        })
        .when('/contact', {
          templateUrl:"views/contact.html", 
          //controller:"Controller",
        })
        .when('/info', {
          templateUrl:"views/info.html"
        })
    }
]);
  
app.controller('formController', function ($scope) {
  $scope.formData = {};
  
  $scope.submitForm = function (formData) {
   $(".nameInput").val(" ");
   $(".messageForm").val("Datos enviados")
  };
});

app.directive('headerDirective', function(){
    return{
      restrict: 'E',
      replace: true,
      templateUrl: 'views/header.html'
    };

});

app.directive('infoDirective', function(){
    return{
      restrict: 'E',
      replace: true,
      templateUrl: 'views/game-info.html'
    };

});

app.directive('showDirective', function(){
  return{
    restrict: 'E',
    templateUrl: 'views/show.html'
  };
});

app.controller('infoController', function($scope, $http){
  $http.get(ENDPOINT).then(function(response){
    $scope.icons = response.data.levels.level1;
    $scope.icons2 = response.data.levels.level2;
    $scope.icons3 = response.data.levels.level3;
  })
})

app.controller('tabController', function () {
        this.tab = 1;

        this.setTab = function (tabId) {
            this.tab = tabId;
        };

        this.isSet = function (tabId) {
            return this.tab === tabId;
        };
    });

})();