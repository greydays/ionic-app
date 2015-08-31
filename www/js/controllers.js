angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope', function($scope) {
  $scope.parseFloat = function(value) {
    return parseFloat(value);
  };

  $scope.data = {
    cOfCOptions: [
      {name:'0.011', val: 0.011},
      {name:'0.015', val: 0.015},
      {name:'0.018', val: 0.018},
      {name:'0.019', val: 0.019},
      {name:'0.020', val: 0.020},
      {name:'0.030', val: 0.030}
    ],
  };

  $scope.nearDepth = function(cOfC, focal, aperture, distance) {
    var focalVal = parseFloat(focal);
    var apertureVal = parseFloat(aperture);
    var cOfCVal = parseFloat(cOfC);
    var distanceVal = parseFloat(distance) * 1000;
    var hyperFocal = (focalVal * focalVal) / (apertureVal * cOfCVal) + focalVal;
    return (((hyperFocal - focalVal) * distanceVal) / (hyperFocal + distanceVal - (2 * focalVal))) / 1000.0;
  }

}])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


