const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6285878836361'] // no own
global.author = 'rizki' // nama author 
global.packname = 'ikybot' // nama pack sticker
global.namabot = 'ikyBOTZ' // nama bot mu
global.group = 'https://chat.whatsapp.com/KcMIbBUddqjIoNmGCrRU5m' // grup mu
global.pic = 'https://telegra.ph/file/36211850fa46193ef96ad.jpg' // logo lu


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
