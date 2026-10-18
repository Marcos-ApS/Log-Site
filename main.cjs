const { app, BrowserWindow } = require('electron');
const path = require('path');
//comentando aq proce//
//aqui ele pega os pacote e cria uma variavel main window//
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true, 
      contextIsolation: false
    },
  });
  //ele puxa as variavel do electron e cria uma nova janela
  // como é react ele puxa junto com o vite q no caso é aql porta padrão lá e inicia a pagina na nova window
  mainWindow.loadURL('http://localhost:5173'); 
  mainWindow.webContents.openDevTools(); 
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

//marcos antes de tentar rodar da um npm install e vai lá nos scripts do package.json e tira aql --no-sandbox//
//como eu to no linux tem que colocar essa budega pra funciona 
// no windus nao eu quebrei a cabeça pra fazer funcionar essa budega mais funfo//
//tem mais coisa no site do eletron pra poder fazer funcionar.