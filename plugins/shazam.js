const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const StoreDB = require("axios");
const config = require('../config');
const bix = Language.getString('unvoice');
const Config = require('../config');
const ffmpeg = require('fluent-ffmpeg');
const sh = "Encuentra la música en el archivo de audio respondido."

const Language = require('../language');
const Lang = Language.getString('scrapers');

if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'find', fromMe: true, desc: 'replay to a audio to find th song' }, (async (message, match) => { 

    if (message.reply_message === false) return await message.client.sendMessage(message.jid, bix.UV_REPLY, MessageType.text);

    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
        .format('mp3')
        .save('lyr.mp3')
        .on('end', async () => {

            var data = { 'api_token': '6a03ebccfc18bb19e3fb7bb5280a51ab', 'file': fs.createReadStream('./lyr.mp3'), 'return': 'apple_music,spotify' };
            req ({ uri: 'https://api.audd.io/', form: data, method: "POST" }, async (err, res, body) => {
                return await message.client.sendMessage(message.jid, body, MessageType.text);
            })
        })
    }));
}
else if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'find', fromMe: true, desc: 'replay to a audio to find th song' }, (async (message, match) => { 

    if (message.reply_message === false) return await message.client.sendMessage(message.jid, bix.UV_REPLY, MessageType.text);

    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
        .format('mp3')
        .save('lyr.mp3')
        .on('end', async () => {

            var data = { 'api_token': '6a03ebccfc18bb19e3fb7bb5280a51ab', 'file': fs.createReadStream('./lyr.mp3'), 'return': 'apple_music,spotify' };
            req ({ uri: 'https://api.audd.io/', form: data, method: "POST" }, async (err, res, body) => {
                return await message.client.sendMessage(message.jid, body, MessageType.text);
            })
        })
    }));
}
