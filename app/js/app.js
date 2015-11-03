(function() {
  var app = angular.module('VideoNode', []);

  app.controller('MovieController', function() {
    this.movies = movieTable;
  });

  var movieTable = [
    { title : 'One', year : 2001 },
    { title : 'Two', year : 2002 },
    { title : 'Three', year : 2003 },
    { title : 'Four', year : 2004 }
  ];

})();
