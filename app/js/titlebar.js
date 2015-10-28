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
	//this.hide();
})
//Listen to the restore event
win.on('restore', function() {
	//this.show();
});
//Listen to the maximize event
win.on('maximize', function() {
	document.getElementById("maximize_button").id = "unmaximize_button";
});
//Listen to the unmaximize event
win.on('unmaximize', function() {
	document.getElementById("unmaximize_button").id = "maximize_button";
});


// close on click
var close_button = document.getElementById('close_button');
close_button.onclick = function() {
	// close the window
	win.close();
}
// minimize on click
var minimize_button = document.getElementById('minimize_button');
minimize_button.onclick = function() {
	// minimize the window
	win.minimize();
}
// maximize on click
var maximize_button = document.getElementById('maximize_button');
if (maximize_button != null) {
	maximize_button.onclick = function() {
		if(maximize_button.id === "maximize_button") {
			// maximize the window
			win.maximize();
		}
		else {
			// unmaximize the window
			win.unmaximize();
		}
	}
}


