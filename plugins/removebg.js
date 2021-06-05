const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'rbg ?(.*)', fromMe: true, desc: 'word image' }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage('NEED_WORD');
    console.log(match[1])

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/removebg?apikey=wvwR0etKIJ3BZQg552K1FCRqIV5&image=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&raw=1`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '```Made By Plk - Dqz```' })

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'rbg ?(.*)', fromMe: false, desc: 'word image' }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage('NEED_WORD');
    console.log(match[1])

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/removebg?apikey=wvwR0etKIJ3BZQg552K1FCRqIV5&image=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&raw=1`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '```Made By Plk - Dqz```' })

    }));
}

