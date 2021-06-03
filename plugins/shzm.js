/*
# Copyright (C) 2020 farhan-dqz
*/


const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const axios = require('axios');

Asena.addCommand({pattern: 'shazam', fromMe: false, desc: sh }, (async (message, match) => { 

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
