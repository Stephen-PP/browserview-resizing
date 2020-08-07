const { app, BrowserWindow, BrowserView } = require('electron');
const viewResizer = require('../');

function createWindow () {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html');
    /*win.openDevTools({
        mode:'undocked'
    });*/

    // Add the browser view
    const view = new BrowserView();
    win.addBrowserView(view);
    view.setBounds({ x: 0, y: 20, width: 800, height: 500});
    view.webContents.loadURL('https://example.com');

    // Set up resizing
    viewResizer(view, win, {
        width: true,
        height: true
    });
}

app.whenReady().then(createWindow);
