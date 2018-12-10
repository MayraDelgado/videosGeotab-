'use strict';
var angularObj = {
    app: null,
    initAngular: function (api, freshState) {
        angularObj.app = angular.module('myAplication', ['ngMaterial']);
        angularObj.app.controller("accesoDatosController", ['$scope', function ($scope) {

        }]);
    }
}