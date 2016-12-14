(function () {
    'use strict';

    angular.module("commerce")
       .factory("cartService", cartService);

    cartService.$inject = ["storageService"];

    function cartService(storageService) {
        var key = "cart";
        var cart = {};
        cart.model = [];

        cart.load = function () {
            cart.model = storageService.getItem(key);
            if (!cart.model) {
                cart.model = [];
            }

            return cart.model.length;
        };

        cart.addToCart = function (item) {
            cart.load();
            cart.model.push(item);
            storageService.setItem(key, cart.model);

            return cart.model.length;
        }

        cart.clearCart = function() {
            storageService.clearAll();
        };

        return cart;
    };
})();