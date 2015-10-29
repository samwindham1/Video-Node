/**
 * http://usejsdoc.org/
 */

//Load native UI library
var gui = require('nw.gui'); //or global.window.nwDispatcher.requireNwGui()
//Get the current window
var win = gui.Window.get();

//Listen to the close event
win.on('close', function() {
	this.hide(); // Pretend to be closed already
	console.log("Closing...");
	this.close(true);
});
//Listen to the minimize event
win.on('minimize', function() {
});
//Listen to the restore event
win.on('restore', function() {
});
//Listen to the maximize event
win.on('maximize', function() {
	// switch id
	var element = document.getElementById("maximize");
	element.id = "unmaximize";
	// switch icon
	var classList = element.firstChild.classList;
	classList.remove('icon-maximize');
	classList.add('icon-unmaximize');
});
//Listen to the unmaximize event
win.on('unmaximize', function() {
	// switch id
	var element = document.getElementById("unmaximize");
	element.id = "maximize";
	// switch icon
	var classList = element.firstChild.classList;
	classList.remove('icon-unmaximize');
	classList.add('icon-maximize');
});


// close on click
var close_button = document.getElementById('close');
close_button.onclick = function() {
	// close the window
	win.close();
}
// minimize on click
var minimize_button = document.getElementById('minimize');
minimize_button.onclick = function() {
	// minimize the window
	win.minimize();
}
// maximize on click
var maximize_button = document.getElementById('maximize');
if (maximize_button != null) {
	maximize_button.onclick = function() {
		if(maximize_button.id === "maximize") {
			// maximize the window
			win.maximize();
		}
		else {
			// unmaximize the window
			win.unmaximize();
		}
	}
}
