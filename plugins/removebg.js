/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const fs = require('fs');
const got = require('got');
const FormData = require('form-data');
const stream = require('stream');
const {promisify} = require('util');

const pipeline = promisify(stream.pipeline);

const Language = require('../language');
const Lang = Language.getString('removebg');

Asena.addCommand({pattern: 'rmbg', fromMe: false, desc: "Remove Image BG." }, (async (message, match) => {
if (!message.reply_message || !message.reply_message.image) return await message.client.sendMessage(message.jid, "*Reply to a image.*", MessageType.text, { quoted: message.data });
await message.sendMessage('Downloading & removing background...')  
var location = await message.client.downloadAndSaveMediaMessage({
    key: {
      remoteJid: message.reply_message.jid,
      id: message.reply_message.id
    },
    message: message.reply_message.data.quotedMessage
  } );
  const bodyForm = new FormData();
  bodyForm.append('image', fs.createReadStream(location));
  bodyForm.append('apikey', '0Z5QY8Dyq3jXwe3c0qpTJRtzPFh');
  await axios('https://api.zeks.xyz/api/removebg', {
    method: 'POST',
    headers: {
      "Content-Type": "multipart/form-data",
      ...bodyForm.getHeaders()
    },
    data: bodyForm,
    responseType: 'arraybuffer'
  })
    .then(async (res) => {
        await message.client.sendMessage(message.jid, res.data, MessageType.image, { mimetype: Mimetype.png, quoted: message.data });
    });
}));
