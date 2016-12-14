(function () {
    'use strict';

    angular.module("commerce")
       .controller("mainController", mainController);

    mainController.$inject = ["storeService", "cartService", "$mdDialog"];

    function mainController(storeService, cartService, $mdDialog) {
        var cartPrefix = "Cart ";
        var vm = this;
        vm.title = 'controller';
        vm.storeItems = [];
        vm.categories = [];
        vm.cart = cartPrefix + "0";
        vm.filterCategory = '';
        vm.searchText = '';

        vm.storeLoad = function () {
            vm.storeItems = storeService.load()
            updateCategories();
            vm.cart = cartPrefix + cartService.load();
        };

        vm.filter = function (category) {
            vm.filterCategory = category;
        };
		
        vm.clearConfirm = function (ev) {
            var confirm = $mdDialog.confirm()
           .title('Would you like to clear cart?')
           .textContent('All select items will be remove from cart')
           .ariaLabel('Lucky day')
           .targetEvent(ev)
           .ok('Please do it!')
           .cancel('Cancel');

            $mdDialog.show(confirm).then(function () {
                vm.cart = cartPrefix + "0";
                cartService.clearCart();
            });
        };

        // search by name and description
        vm.searchFilter = function (item) {

            if (!vm.searchText && !vm.filterCategory) {
                return true;
            }

            var name = item.name.toLowerCase();
            var description = item.description.toLowerCase();
            var search = vm.searchText.toLowerCase();

            if (!vm.searchText && vm.filterCategory) {
                return vm.filterCategory == item.category;
            }

            if (!vm.filterCategory && vm.searchText) {
                return name.indexOf(search) != -1 || description.indexOf(search) != -1;
            }

            return (name.indexOf(search) != -1 || description.indexOf(search) != -1) && item.category == vm.filterCategory;
        }

        vm.addToCart = function (item) {
            vm.cart = cartPrefix + cartService.addToCart(item);
        };

        function updateCategories() {
            var result = [];
	
            for (var i = 0; i < vm.storeItems.length; i++) {
                if (result.indexOf(vm.storeItems[i].category) === -1) {
                    result.push(vm.storeItems[i].category);
                }
            }

            vm.categories = result;
        }
    };
})();