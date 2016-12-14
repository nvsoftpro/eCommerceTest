(
    function () {
        'use strict';
        var myApp = angular
            .module('commerce', ['ngSanitize', 'ngMaterial', 'LocalStorageModule'])
            .config(function ($logProvider) {
                $logProvider.debugEnabled(true);
            });

        myApp.config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
             .primaryPalette('green', {
                 'default': '400'
             })
             .accentPalette('purple', {
                 'default': '200'
             });
        });

        myApp.config(function (localStorageServiceProvider) {
            localStorageServiceProvider
              .setPrefix('commerce');
        });

    })();