const path = require('path');
const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    let win = new BrowserWindow({width: 800, height: 600});
    win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
});