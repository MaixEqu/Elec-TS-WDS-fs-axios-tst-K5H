const { app, BrowserWindow } = require('electron');

const cc=console.log;
//const isDEV=false;
const isDEV = (process.env.NODE_DEV === 'Maix')

cc('isDEV: ' + isDEV);
if (isDEV) {
  cc('electron-reload: << ON! >>')
  require('electron-reload')(__dirname + '/..');
} else {
  cc('electron-reload: << OFF >>')
}

function createWindow () {
  console.log(' =JS=> createWindow() starts')
  let win = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.webContents.openDevTools();

  win.loadFile('index.html');
}

app.on('ready', createWindow);
