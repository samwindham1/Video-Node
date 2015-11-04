(function() {
  var app = angular.module('VideoNode', []);

  app.controller('MovieController', function() {
    this.movies = library;
  });


  // search box
  app.controller('SearchController', ['$scope', function($scope) {
    $scope.query = '';
    $scope.text = 'Search...';
    $scope.setQuery = function() {
      if($scope.text) {
        $scope.query = $scope.text;
      }
    };
    $scope.blurOnEnter = function($event) {
      var target = $event.target;
      $scope.text = 'Search...';
      target.blur();
    };
    $scope.clear = function() {
      $scope.text = '';
    }
  }]);

  var library = [{
      title : 'Fight Club',
      year : 1999,
      images : [
        "http://ia.media-imdb.com/images/M/MV5BMjIwNTYzMzE1M15BMl5BanBnXkFtZTcwOTE5Mzg3OA@@._V1_UY1200_CR88,0,630,1200_AL_.jpg"
      ]
    }, {
      title : 'Silence of the Lambs',
      year : 1991,
      images : [
        "http://ia.media-imdb.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SX640_SY720_.jpg"
      ]
    }, {
      title : 'Django Unchained',
      year : 2012,
      images : [
        "http://ia.media-imdb.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX640_SY720_.jpg"
      ]
    }, {
      title : 'There Will Be Blood',
      year : 2001,
      images : [
        "http://ia.media-imdb.com/images/M/MV5BMjA0NjE1ODEyNV5BMl5BanBnXkFtZTcwNDIzMzE5NQ@@._V1_SX640_SY720_.jpg"
      ]
  }];

})();
