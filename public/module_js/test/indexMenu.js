/**
 * Created by Wangyao on 2015/7/14.
 */
var indexMenuApp = angular.module("indexMenu", ['ngSanitize']);

indexMenuApp.controller("menuController", function($scope, $sce, $http) {
    $scope.menus = [
        {"name":"Home","url":""},
        {"name":"Article","url":""},
        {"name":"Post","url":""},
        {"name":"Comment","url":""},
        {"name":"Theme","url":""},
        {"name":"Configure","url":""}];


    $scope.menuClick = function(name) {
        var url = "/test/" + name;
        $scope.activeMenuContent = url;
        $http.post(url, {}).success(function(response) {
            $scope.activeMenuContent = response;
            $scope.trustHtmlMenuContent = $sce.trustAsHtml(response);
            //$scope.menu[name] = response;
        });
    };

});

indexMenuApp.controller("registerController", function($scope, $http) {

    $scope.formData = {};

    $scope.submit = function() {
        $http({
            method  : 'POST',
            url     : 'post/register',
            data    : $.param($scope.formData),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        }).success(function(data) {
            console.log(data);
            if (!data.success) {
                // if not successful, bind errors to error variables
                $scope.errorName = data.errors.name;
                $scope.errorSuperhero = data.errors.superheroAlias;
            } else {
                // if successful, bind success message to message
                $scope.message = data.message;
            }
        });
    };


});