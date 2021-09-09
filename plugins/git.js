const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://wallpapercave.com/w/wp5854927.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater ANS CUTZZ*
*owner number wa.me/918304043710*
*bot Supporting Group : https://chat.whatsapp.com/D7mZ8nK6VxH9uQYImdsO1i*
*githublink       https://github.com/ansanshif/professor*
*audio commads    https://github.com/ansanshif/professor/tree/master/uploads*
*sticker commads  https://github.com/ansanshif/professor/tree/master/uploads*
`}) 

}));
