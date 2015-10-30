/**
* http://usejsdoc.org/
*/

//Load native UI library
var gui = require('nw.gui'); //or global.window.nwDispatcher.requireNwGui()
//Get the current window
var win = gui.Window.get();

var searchbox = document.getElementsByClassName('searchbox')[0];
var search = document.getElementById('search');
