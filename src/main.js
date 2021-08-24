'use strict'
const path = require('path')
const { BrowserWindow, Menu, app } = require('electron')
Menu.setApplicationMenu(false)

const defaultProps = {
    fullscreen: true,
    webPreferences: {
        devTools: false,
        sandbox: false
    },
    icon: path.join(__dirname, '../gui/icon.png')
}

class Window extends BrowserWindow {
    constructor({ url, ...windiwSettings }) {
        super({ ...defaultProps, ...windiwSettings })
        this.loadURL(url)

        this.once('ready-to-show', () => {
            this.show()
        })
    }
}

app.on('ready', () => {
    const mainWindow = new Window({
        url: 'http://shoppu.tv',
    })
    app.focus()
})

app.on('window-all-closed', () => {
    app.quit()
})