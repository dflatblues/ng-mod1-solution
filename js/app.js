(function () {
    'use strict';

    angular.module('LunchCheck', [])

        .controller('LunchCheckController', function ($scope) {

            $scope.checkMenu = function () {

                var message = '';

                if ($scope.menu == null || $scope.menu == '') {
                    message = 'Please enter data first';
                }else{
                    var elements = countElements($scope.menu);
                    message = (elements > 3) ? 'Too much!' : 'Enjoy!';
                }

                $scope.message = message;
            };

            function countElements(menu) {

                // Clean empty strings
                var menuList = menu.split(',').filter(function(v){return v!=='' && v!==' '});

                return menuList.length;
            }

        });


})();
