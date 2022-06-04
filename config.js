/**
   * Modded by Zerenity.
   * Contact Me on wa.me/6282337245566
   * Follow https://github.com/clicknetcafe
*/

const fs = require('fs')
const chalk = require('chalk')

/*// Website Api
global.APIs = {
	lol: 'https://api.lolhuman.xyz',
}

// Apikey jangan diisi, isi dibawah
global.APIKeys = {
	'https://api.lolhuman.xyz': 'apikey',
}*/

// Ganti apikey lolhuman dan imgbbkey punya lu
global.LolApiKey = 'hc8fyhce33ncq34uif'
global.Imgbb = '7b2fde1f55b9a594d5db403f0a0c2712'
global.owner = ['6283867149253']
global.premium = ['6283867149253']
global.packname = 'RhmtBotz'
global.author = 'RhmtBotz'
global.sessionName = 'hisoka'
global.prefa = ['!','.']
global.sp = '⭔'
// Ganti grup WA lu kalo pengen
global.gwa = 'https://chat.whatsapp.com/EJgLF3zHijIFrG1QQIX3Yl'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Habis, Limit Direset Setiap Pukul 12:00 AM GMT+7',
}
global.limitawal = {
    premium: "Infinity",
    free: 60
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
