//Load native UI library
var gui = require('nw.gui'); //or global.window.nwDispatcher.requireNwGui()
//Get the current window
var win = gui.Window.get();

var back = document.getElementById('back');
back.onclick = function() {
  win.showDevTools();
  console.log("back");
}

var forward = document.getElementById('forward');
forward.onclick = function() {
  win.showDevTools();
  console.log("forward");
}
