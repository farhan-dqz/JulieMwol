const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');



Asena.addCommand({ pattern: 'random ?(.*)', fromMe: false, desc: 'word image' }, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = `https://api.xteam.xyz/textpro/neon?text=${match[1]}&APIKEY=8a2b52654b55c3f6`
    r_text[1] = `https://api.xteam.xyz/textpro/snowtext?text=${match[1]}&APIKEY=8a2b52654b55c3f6`
    r_text[2] = `https://api.xteam.xyz/textpro/3dgradient?text=${match[1]}&APIKEY=8a2b52654b55c3f6`
    r_text[3] = `https://api.xteam.xyz/textpro/3dluxury?text=${match[1]}&APIKEY=8a2b52654b55c3f6`
    r_text[4] = `https://api.xteam.xyz/textpro/3dgradient?text=${match[1]}&APIKEY=8a2b52654b55c3f6`
    r_text[5] = `https://api.xteam.xyz/textpro/blackpink?text=${match[1]}&APIKEY=8a2b52654b55c3f6`
    r_text[6] = `https://api.xteam.xyz/textpro/realisticvintage?text=${match[1]}&APIKEY=8a2b52654b55c3f6`
    r_text[7] = `https://api.xteam.xyz/textpro/cloudsky?text=${match[1]}&APIKEY=8a2b52654b55c3f6`
    r_text[8] = `https://api.xteam.xyz/textpro/sandsummerbeach?text=${match[1]}&APIKEY=8a2b52654b55c3f6`
    r_text[9] = `https://api.xteam.xyz/textpro/glitch?text=${match[1]}&APIKEY=8a2b52654b55c3f6`
    r_text[10] = `https://api.xteam.xyz/textpro/metaldarkgold?text=${match[1]}&APIKEY=8a2b52654b55c3f6`
    r_text[11] = `https://api.xteam.xyz/textpro/goldfoilballon?text=${match[1]}&APIKEY=8a2b52654b55c3f6` 

    var i = Math.floor(11*Math.random())
    if (match[1] === '') return await message.sendMessage('NEED_WORD');
    console.log(match[1])

    var ttinullimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '😀' })

}));
