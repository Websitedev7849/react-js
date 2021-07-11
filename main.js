const {app, BrowserWindow} = require('electron');

app.on("ready", ()=>{
    let win = new BrowserWindow(
        {
            height: 780,
            width: 1216,
            webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            }
        }
    );
    win.loadFile("./build/index.html");
});