(function () {
  'use strict';

  angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];

  function LunchCheckController($scope, $filter) {
    $scope.message = '';
    $scope.lunchMenu = '';
    $scope.colorClass = ''

    $scope.checkIfTooMuch = function () {
      let maxItems = 3;

      let lunchItems = $scope.lunchMenu.split(',').filter(item => item.replace(/\s+/g, '') != ''),
          numItems = lunchItems.length;

      $scope.colorClass = 'danger';

      if (numItems === 0) {
        $scope.message = 'Please enter data first';
      }
      else if (numItems <= maxItems) {
        $scope.message = 'Enjoy!';
        $scope.colorClass = 'success';
      }
      else {
        $scope.message = 'Too much!';
      }
    }

  }

})();
