const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════😎sophia😎═════╗*\n           \n*⚜═Sophia═⚜*\n\n*owner Hisham muhammed- http://Wa.me/+919207866848*\n* *\n*🔰Youtube https://youtube.com/c/ICHUTECH?r=nametag            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: hisham muhammed*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n*Sophia\n*❖═Owner Hisham muhammed ═*\n\n*💘 https://github.com/Hisham-Muhammed/Sophia/Sophia*\n*     *\n*💓Liyamol\n*❖═Owner Saidali═❖*\n\n*⚜https://github.com/saidalisaid2/LiyaMol    *\n**\n*yt link to set bot:- https://youtu.be/_D4ZYuUSXjs"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════😎SOPHIA😎═════╗*\n           \n*⚜═Sophia═⚜*\n\n*owner HISHAM MUHAMMED- http://Wa.me/+919207866848*\n* *\n*🔰YOUTUBE  https://youtube.com/c/ICHUTECH?r=nametag            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Hishammuhammed*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n*Sophia\n*💥═Owner Hisham muhammed═💥*\n\n*💘 https://github.com/Hisham-Muhammed/Sophia/Sophia*\n*     *\n*💓Liyamol\n*❖═Owner Saidali═❖*\n\n*⚜https://github.com/saidalisaid2/LiyaMol    *\n**\n*yt link to set bot:- https://youtu.be/_D4ZYuUSXjs"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }
