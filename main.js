const {app, BrowserWindow} = require('electron');

app.on("ready", ()=>{
    let win = new BrowserWindow({height: 700, width: 600});
    win.loadURL("http:/localhost:3000/");
});