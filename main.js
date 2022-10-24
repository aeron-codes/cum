const { app, BrowserWindow } = require('electron');
const path = require('path');
const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width : 600,
        height: 600,
        resizable: false,
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadFile(path.join(__dirname, './index.html'));
}
app.on('ready', loadMainWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        loadMainWindow();
    }
});