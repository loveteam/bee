/**
 * Created by Wangyao on 2015/7/14.
 */
var indexMenuApp = angular.module("indexMenu", []);
indexMenuApp.controller("menuController", function($scope, $http) {
    $scope.menus = [
        {"name":"Home","url":""},
        {"name":"Article","url":""},
        {"name":"Post","url":""},
        {"name":"Comment","url":""},
        {"name":"Theme","url":""},
        {"name":"Configure","url":""}];


    $scope.menuClick = function(name) {
        var url = "/" + name;
        $scope.activeMenuContent = url;
        $http.post(url, {}).success(function(response) {
            $scope.activeMenuContent = response;
            //$scope.menu[name] = response;
        });
    };


});