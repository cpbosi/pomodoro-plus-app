const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 500,
    height: 550,
    minWidth: 500,
    minHeight: 550,
    alwaysOnTop: true,
    title: 'Pomodoro moveit',
    icon: 'assets/programmer.png',
    autoHideMenuBar: true,
  })

    win.loadURL('https://pomodoroplus.vercel.app/')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})