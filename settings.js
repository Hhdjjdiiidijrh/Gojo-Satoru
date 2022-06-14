//═══════════════════════════════════════════════════════//
//
//                              KING-TIGGER 𝓫𝔂 prabhsh laknindu
//SINHALA EDITz and all prabhsha (tiggerk)
සියලුම දඑවල් කින්ග් ටිගෙර් සතුය.for copying for nexus gojusatoru.
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94704045022']
global.premium = ['94704045022']
global.ownernomer = '94704045022'
global.ownername = 'KING TIGGER WHA BOT'
global.botname = 'PRABHSHA LAKNINDU KULATHUNGA '
global.footer = '©Slkingtigger'
global.ig = 'https://github.com/nexusNw'
global.region = 'India, South India, Kerala'
global.sc = 'https://github.com/nexusNw/Gojo-Satoru'
global.myweb = 'https://youtube.com/channel/UCqoUjPvDdb0kjXNYdvPPpHQ'
global.packname = 'tiggerkingprabhsha'
global.author = 'prabhash king 🐅 '
global.sessionName = 'session'
global.prefa = ['','!','.','⚠️️','🐅','👑']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'ඔයලට මෙක කරන්න බා!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'මෙක කරන්න පුලුවන් බොටාට විතරයි.',
    wait: 'පොඩ්ඩක් ඉන්නකො...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'ඔයාගෙ දවසෙ බාවිතා කල හකි අවස්ථා අවසන් වි තිබේ.try for 12 hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
