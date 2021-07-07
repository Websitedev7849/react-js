const {app, BrowserWindow} = require('electron');

app.on("ready", ()=>{
    let win = new BrowserWindow(
        {
            height: 710,
            width: 1016,
            webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            }
        }
    );
    win.loadURL("http:/localhost:3000/");
});