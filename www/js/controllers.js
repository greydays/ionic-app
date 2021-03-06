angular.module('starter.controllers', [])

.controller('DepthOfFieldCtrl', ['$scope', function($scope) {

  $scope.cOfCOptions = [
    {name:'0.011', value: 0.011},
    {name:'0.015', value: 0.015},
    {name:'0.018', value: 0.018},
    {name:'0.019', value: 0.019},
    {name:'0.020', value: 0.020},
    {name:'0.030', value: 0.030}
  ];
  $scope.cOfC = {value: 0.011};

  $scope.focalOptions = [
    {name: '3', value: 3},
    {name: '3.6', value: 3.6},
    {name: '4', value: 4},
    {name: '4.3', value: 4.3},
    {name: '4.5', value: 4.5},
    {name: '4.6', value: 4.6},
    {name: '4.7', value: 4.7},
    {name: '4.75', value: 4.75},
    {name: '4.8', value: 4.8},
    {name: '5.0', value: 5},
    {name: '5.1', value: 5.1},
    {name: '5.2', value: 5.2},
    {name: '5.3', value: 5.3},
    {name: '5.4', value: 5.4},
    {name: '5.5', value: 5.5},
    {name: '5.6', value: 5.6},
    {name: '5.7', value: 5.7},
    {name: '5.8', value: 5.8},
    {name: '5.83', value: 5.83},
    {name: '5.9', value: 5.9},
    {name: '6.0', value: 6},
    {name: '6.1', value: 6.1},
    {name: '6.11', value: 6.11},
    {name: '6.2', value: 6.2},
    {name: '6.3', value: 6.3},
    {name: '6.32', value: 6.32},
    {name: '6.33', value: 6.33},
    {name: '6.4', value: 6.4},
    {name: '6.5', value: 6.5},
    {name: '6.6', value: 6.6},
    {name: '6.7', value: 6.7},
    {name: '6.8', value: 6.8},
    {name: '6.9', value: 6.9},
    {name: '7.0', value: 7},
    {name: '7.1', value: 7.1},
    {name: '7.15', value: 7.15},
    {name: '7.2', value: 7.2},
    {name: '7.25', value: 7.25},
    {name: '7.3', value: 7.3},
    {name: '7.4', value: 7.4},
    {name: '7.5', value: 7.5},
    {name: '7.51', value: 7.51},
    {name: '7.6', value: 7.6},
    {name: '7.7', value: 7.7},
    {name: '7.8', value: 7.8},
    {name: '7.85', value: 7.85},
    {name: '7.9', value: 7.9},
    {name: '8.0', value: 8},
    {name: '8.2', value: 8.2},
    {name: '8.3', value: 8.3},
    {name: '8.5', value: 8.5},
    {name: '8.9', value: 8.9},
    {name: '9.0', value: 9},
    {name: '9.2', value: 9.2},
    {name: '9.7', value: 9.7},
    {name: '9.9', value: 9.9},
    {name: '10.0', value: 10},
    {name: '10.5', value: 10.5},
    {name: '10.8', value: 10.8},
    {name: '11.0', value: 11},
    {name: '11.6', value: 11.6},
    {name: '12.0', value: 12},
    {name: '12.5', value: 12.5},
    {name: '12.6', value: 12.6},
    {name: '13.0', value: 13},
    {name: '13.2', value: 13.2},
    {name: '13.5', value: 13.5},
    {name: '14.0', value: 14},
    {name: '14.1', value: 14.1},
    {name: '14.3', value: 14.3},
    {name: '14.4', value: 14.4},
    {name: '14.9', value: 14.9},
    {name: '15.0', value: 15},
    {name: '15.1', value: 15.1},
    {name: '15.3', value: 15.3},
    {name: '15.5', value: 15.5},
    {name: '15.6', value: 15.6},
    {name: '16.0', value: 16},
    {name: '16.2', value: 16.2},
    {name: '16.5', value: 16.5},
    {name: '16.6', value: 16.6},
    {name: '16.8', value: 16.8},
    {name: '17.0', value: 17},
    {name: '17.1', value: 17.1},
    {name: '17.3', value: 17.3},
    {name: '17.4', value: 17.4},
    {name: '18.0', value: 18},
    {name: '18.3', value: 18.3},
    {name: '18.6', value: 18.6},
    {name: '18.9', value: 18.9},
    {name: '19.0', value: 19},
    {name: '19.2', value: 19.2},
    {name: '19.5', value: 19.5},
    {name: '19.8', value: 19.8},
    {name: '20.0', value: 20},
    {name: '20.1', value: 20.1},
    {name: '20.3', value: 20.3},
    {name: '20.7', value: 20.7},
    {name: '21.0', value: 21},
    {name: '21.3', value: 21.3},
    {name: '21.4', value: 21.4},
    {name: '21.6', value: 21.6},
    {name: '21.8', value: 21.8},
    {name: '21.9', value: 21.9},
    {name: '22.0', value: 22},
    {name: '22.2', value: 22.2},
    {name: '22.5', value: 22.5},
    {name: '22.8', value: 22.8},
    {name: '22.9', value: 22.9},
    {name: '23.0', value: 23},
    {name: '23.1', value: 23.1},
    {name: '23.2', value: 23.2},
    {name: '23.4', value: 23.4},
    {name: '23.5', value: 23.5},
    {name: '23.7', value: 23.7},
    {name: '24.0', value: 24},
    {name: '24.3', value: 24.3},
    {name: '24.9', value: 24.9},
    {name: '25.0', value: 25},
    {name: '25.2', value: 25.2},
    {name: '25.8', value: 25.8},
    {name: '26.0', value: 26},
    {name: '26.3', value: 26.3},
    {name: '26.4', value: 26.4},
    {name: '27.0', value: 27},
    {name: '28.0', value: 28},
    {name: '28.46', value: 28.4},
    {name: '28.6', value: 28.6},
    {name: '28.8', value: 28.8},
    {name: '29.0', value: 29},
    {name: '29.2', value: 29.2},
    {name: '30.0', value: 30},
    {name: '31.0', value: 31},
    {name: '31.4', value: 31.4},
    {name: '32.0', value: 32},
    {name: '33.0', value: 33},
    {name: '34.0', value: 34},
    {name: '34.8', value: 34.8},
    {name: '35.0', value: 35},
    {name: '35.5', value: 35.5},
    {name: '36.0', value: 36},
    {name: '36.6', value: 36.6},
    {name: '37.0', value: 37},
    {name: '37.5', value: 37.5},
    {name: '38.0', value: 38},
    {name: '39.0', value: 39},
    {name: '39.5', value: 39.5},
    {name: '40.0', value: 40},
    {name: '41.0', value: 41},
    {name: '42.0', value: 42},
    {name: '43.0', value: 43},
    {name: '44.7', value: 44.7},
    {name: '45.0', value: 45},
    {name: '46.0', value: 46},
    {name: '46.8', value: 46.8},
    {name: '47.0', value: 47},
    {name: '48.0', value: 48},
    {name: '48.5', value: 48.5},
    {name: '50.0', value: 50},
    {name: '50.8', value: 50.8},
    {name: '50.9', value: 50.9},
    {name: '51.0', value: 51.0},
    {name: '51.2', value: 51.2},
    {name: '51.6', value: 51.6},
    {name: '52.0', value: 52},
    {name: '53.0', value: 53},
    {name: '54.0', value: 54},
    {name: '55.0', value: 55},
    {name: '55.2', value: 55.2},
    {name: '56.0', value: 56},
    {name: '58.0', value: 58},
    {name: '59.0', value: 59},
    {name: '60.0', value: 60},
    {name: '61.0', value: 61},
    {name: '63.0', value: 63},
    {name: '63.2', value: 63.2},
    {name: '65.0', value: 65},
    {name: '66.0', value: 66},
    {name: '66.7', value: 66.7},
    {name: '69.0', value: 69},
    {name: '69.9', value: 69.9},
    {name: '70.0', value: 70},
    {name: '71.2', value: 71.2},
    {name: '71.5', value: 71.5},
    {name: '72.0', value: 72},
    {name: '75.0', value: 75},
    {name: '76.0', value: 76},
    {name: '80.0', value: 80},
    {name: '85.0', value: 85},
    {name: '86.0', value: 86},
    {name: '88.8', value: 88.8},
    {name: '89.0', value: 89},
    {name: '90.0', value: 90},
    {name: '95.0', value: 95},
    {name: '100.0', value: 100},
    {name: '101.0', value: 101},
    {name: '102.0', value: 102},
    {name: '103.0', value: 103},
    {name: '104.0', value: 104},
    {name: '105.0', value: 105},
    {name: '106.0', value: 106},
    {name: '108.0', value: 108},
    {name: '110.0', value: 110},
    {name: '111.0', value: 111},
    {name: '114.0', value: 114},
    {name: '115.0', value: 115},
    {name: '117.0', value: 117},
    {name: '120.0', value: 120},
    {name: '121.0', value: 121},
    {name: '123.0', value: 123},
    {name: '125.0', value: 125},
    {name: '127.0', value: 127},
    {name: '130.0', value: 130},
    {name: '135.0', value: 135},
    {name: '140.0', value: 140},
    {name: '145.0', value: 145},
    {name: '150.0', value: 150},
    {name: '152.0', value: 152},
    {name: '155.0', value: 155},
    {name: '160.0', value: 160},
    {name: '165.0', value: 165},
    {name: '168.0', value: 168},
    {name: '170.0', value: 170},
    {name: '180.0', value: 180},
    {name: '190.0', value: 190},
    {name: '200.0', value: 200},
    {name: '203.0', value: 203},
    {name: '205.0', value: 205},
    {name: '210.0', value: 210},
    {name: '215.0', value: 215},
    {name: '240.0', value: 240},
    {name: '250.0', value: 250},
    {name: '254.0', value: 254},
    {name: '255.0', value: 255},
    {name: '260.0', value: 260},
    {name: '270.0', value: 270},
    {name: '280.0', value: 280},
    {name: '300.0', value: 300},
    {name: '305.0', value: 305},
    {name: '320.0', value: 320},
    {name: '350.0', value: 350},
    {name: '355.0', value: 355},
    {name: '360.0', value: 360},
    {name: '375.0', value: 375},
    {name: '380.0', value: 380},
    {name: '400.0', value: 400},
    {name: '420.0', value: 420},
    {name: '450.0', value: 450},
    {name: '480.0', value: 480},
    {name: '500.0', value: 500},
    {name: '600.0', value: 600},
    {name: '610.0', value: 610},
    {name: '720.0', value: 720},
    {name: '800.0', value: 800},
    {name: '1000.0', value: 1000},
    {name: '1200.0', value: 1200}
  ];
  $scope.focal = {value: 3};

  $scope.apertureOptions = [
    {name:'f/1', value: 1},
    {name:'f/1.2', value: 1.189207},
    {name:'f/1.4', value: 1.414214},
    {name:'f/1.6', value: 1.587401},
    {name:'f/1.7', value: 1.681793},
    {name:'f/1.8', value: 1.781797},
    {name:'f/2', value: 2.000000},
    {name:'f/2.2', value: 2.244924},
    {name:'f/2.4', value: 2.378414},
    {name:'f/2.5', value: 2.519842},
    {name:'f/2.8', value: 2.828427},
    {name:'f/3.2', value: 3.174802},
    {name:'f/3.4', value: 3.363586},
    {name:'f/3.6', value: 3.563595},
    {name:'f/4', value: 4.000000},
    {name:'f/4.5', value: 4.489848},
    {name:'f/4.8', value: 4.756828},
    {name:'f/5', value: 5.039684},
    {name:'f/5.6', value: 5.656854},
    {name:'f/6.4', value: 6.349604},
    {name:'f/6.7', value: 6.727171},
    {name:'f/7.1', value: 7.127190},
    {name:'f/8', value: 8.000000},
    {name:'f/9', value: 8.979696},
    {name:'f/9.5', value: 9.513657},
    {name:'f/10', value: 10.07937},
    {name:'f/11', value: 11.31370},
    {name:'f/12.7', value: 12.69920},
    {name:'f/13.5', value: 13.45434},
    {name:'f/14.3', value: 14.25437},
    {name:'f/16', value: 16.00000},
    {name:'f/18', value: 17.95939},
    {name:'f/19', value: 19.02731},
    {name:'f/20', value: 20.15873},
    {name:'f/22', value: 22.62741},
    {name:'f/25', value: 25.39841},
    {name:'f/27', value: 26.90868},
    {name:'f/28', value: 28.50875},
    {name:'f/32', value: 32},
    {name:'f/45', value: 45.25483},
    {name:'f/64', value: 64}
  ];
  $scope.aperture = {value: 1};

  $scope.distance = {value: 1};

  $scope.unitOptions = [
    {name:'meters (m)', value: 1.0},
    {name:'centermeters (cm)', value: 0.01},
    {name:'feet (ft)', value: 0.3048},
    {name:'inches (in)', value: 0.0254}
  ];
  $scope.units = 1;

  $scope.hyperfocal = function() {
    var distanceVal = parseFloat($scope.distance.value) * 1000;
    var hyperfocVal = ($scope.focal.value * $scope.focal.value) / ($scope.aperture.value * $scope.cOfC.value) + $scope.focal.value;
    return Math.round(hyperfocVal * 100) / 100;
  };

  $scope.nearDepth = function() {
    var distanceVal = parseFloat($scope.distance.value) * 1000;
    return ((($scope.hyperfocal() - $scope.focal.value) * distanceVal) / ($scope.hyperfocal() + distanceVal - (2 * $scope.focal.value))) / 1000.0;
  };

  $scope.farDepth = function() {
    var distanceVal = parseFloat($scope.distance.value) * 1000;
    var farDepthCalc = ((($scope.hyperfocal() - $scope.focal.value) * distanceVal) / ($scope.hyperfocal() - distanceVal)) / 1000.0;
    if (farDepthCalc >= 0) {
      return farDepthCalc;
    } else {
      return "Infinite";
    };
  };

  $scope.totalDepth = function() {
    return $scope.farDepth() - $scope.nearDepth();
  };

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


