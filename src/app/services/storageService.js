
(function () {
    'use strict';

    angular.module("commerce")
       .factory("storageService", storageService);

    storageService.$inject = ['localStorageService'];

    function storageService(localStorageService) {

        var service = {};

        service.setItem = function(key, val) {
            return localStorageService.set(key, val);
        };

        service.getItem = function(key) {
            return localStorageService.get(key);
        };

        service.clearAll = function() {
            return localStorageService.clearAll();
        };

        return service;
    };


})();