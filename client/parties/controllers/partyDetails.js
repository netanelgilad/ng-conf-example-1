angular.module("socially").controller("PartyDetailsCtrl", ['$scope', '$stateParams',
  function($scope, $stateParams){

    $scope.party = {'name': 'Dubstep-Free Zone',
      'description': 'Fast just got faster with Nexus S.'};

}]);