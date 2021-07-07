const {app, BrowserWindow} = require('electron');

app.on("ready", ()=>{
    let win = new BrowserWindow(
        {
            height: 1016,
            width: 710,
            webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            }
        }
    );
    win.loadURL("http:/localhost:3000/");
});