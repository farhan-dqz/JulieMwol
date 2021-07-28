const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'owner', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.pixelstalk.net/wp-content/uploads/2016/03/Pikachu-wallpaper-HD-dowload.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Ameer*
*owner number wa.me/919946432377*
*instagram  : https://www.instagram.com/ameer_.su_hail?r=nametag*
*bot setting video : https://youtu.be/_D4ZYuUSXjs
*githublink       https://github.com/ameer-kallumthodi/pikachu*
*audio commads    https://github.com/ameer-kallumthodi/pikachu/tree/master/uploads*
*sticker commads  https://github.com/ameer-kallumthodi/pikachu/tree/master/uploads*
`}) 

}));
