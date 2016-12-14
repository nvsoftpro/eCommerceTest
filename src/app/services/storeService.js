(function () {
    'use strict';

    angular.module("commerce")
       .factory("storeService", storeService);

    function storeService() {
        var store = {};
		
		// fake json model 
        store.load = function () {
            return [{"id":0,"mediaUrl":"../src/media/image0.jpg","name":"StoreItem0","description":"Description 0","price":0.0,"category":"Category 0"},{"id":1,"mediaUrl":"../src/media/image1.jpg","name":"StoreItem1","description":"Description 1","price":10.0,"category":"Category 1"},{"id":2,"mediaUrl":"../src/media/image2.jpg","name":"StoreItem2","description":"Description 2","price":20.0,"category":"Category 2"},{"id":3,"mediaUrl":"../src/media/image3.jpg","name":"StoreItem3","description":"Description 3","price":30.0,"category":"Category 3"},{"id":4,"mediaUrl":"../src/media/image4.jpg","name":"StoreItem4","description":"Description 4","price":40.0,"category":"Category 4"},{"id":5,"mediaUrl":"../src/media/image0.jpg","name":"StoreItem5","description":"Description 5","price":50.0,"category":"Category 0"},{"id":6,"mediaUrl":"../src/media/image1.jpg","name":"StoreItem6","description":"Description 6","price":60.0,"category":"Category 1"},{"id":7,"mediaUrl":"../src/media/image2.jpg","name":"StoreItem7","description":"Description 7","price":70.0,"category":"Category 2"},{"id":8,"mediaUrl":"../src/media/image3.jpg","name":"StoreItem8","description":"Description 8","price":80.0,"category":"Category 3"},{"id":9,"mediaUrl":"../src/media/image4.jpg","name":"StoreItem9","description":"Description 9","price":90.0,"category":"Category 4"},{"id":10,"mediaUrl":"../src/media/image0.jpg","name":"StoreItem10","description":"Description 10","price":100.0,"category":"Category 0"},{"id":11,"mediaUrl":"../src/media/image1.jpg","name":"StoreItem11","description":"Description 11","price":110.0,"category":"Category 1"},{"id":12,"mediaUrl":"../src/media/image2.jpg","name":"StoreItem12","description":"Description 12","price":120.0,"category":"Category 2"},{"id":13,"mediaUrl":"../src/media/image3.jpg","name":"StoreItem13","description":"Description 13","price":130.0,"category":"Category 3"},{"id":14,"mediaUrl":"../src/media/image4.jpg","name":"StoreItem14","description":"Description 14","price":140.0,"category":"Category 4"},{"id":15,"mediaUrl":"../src/media/image0.jpg","name":"StoreItem15","description":"Description 15","price":150.0,"category":"Category 0"},{"id":16,"mediaUrl":"../src/media/image1.jpg","name":"StoreItem16","description":"Description 16","price":160.0,"category":"Category 1"},{"id":17,"mediaUrl":"../src/media/image2.jpg","name":"StoreItem17","description":"Description 17","price":170.0,"category":"Category 2"},{"id":18,"mediaUrl":"../src/media/image3.jpg","name":"StoreItem18","description":"Description 18","price":180.0,"category":"Category 3"},{"id":19,"mediaUrl":"../src/media/image4.jpg","name":"StoreItem19","description":"Description 19","price":190.0,"category":"Category 4"}];
        };

        return store;
    };
})();