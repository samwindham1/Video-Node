//Load native UI library
var gui = require('nw.gui'); //or global.window.nwDispatcher.requireNwGui()
//Get the current window
var win = gui.Window.get();

var query = '';

var search = document.getElementById('search');
search.addEventListener('input',setQuery);

search.addEventListener('keypress', function(e) {
  var key = e.which || e.keyCode;
  if (key === 13) { // 13 is enter
    win.showDevTools();
    console.log('Search Query: ', query);
    this.value = '';
  }
});

function setQuery() {
  query = this.value;
}
