// Load native UI library
var ngui = require('nw.gui');

// Get the current window
var nwin = ngui.Window.get();
// show devtools to debug
nwin.showDevTools();

onload = function() {
    nwin.show();
    nwin.maximize();
}

