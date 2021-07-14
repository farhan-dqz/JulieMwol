const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════◉Pikachu(Ameer)◉═════╗*\n           Pikachu🪐\n*❖═List═❖*\n\n*💠owner - http://Wa.me/+919946432377*\n*💠https://www.instagram.com/ameer_.su_hail?r=nametag            *\n*╚═══❖══▣══▣══❖═══╝*\n\n*▷Creator: Ameer💫*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*╔═════🔅Git links🔅═════╗*\n           Pikachu\n*❖═Owner Ameer Suhail═❖*\n\n*�⚜https://github.com/ameer-kallumthodi/pikachu*\n*     Liyamol\n*❖═Owner Saidali═❖*\n\n*�⚜https://github.com/saidalisaid2/LiyaMol        \n*╚═══❖══▣══▣══❖═══╝*\n\n*▷Creator: Ameer*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════◉Pikachu(Ameer)◉═════╗*\n           Pikachu🪐\n*❖═List═❖*\n\n*💠owner - http://Wa.me/+919946432377*\n*💠https://www.instagram.com/ameer_.su_hail?r=nametag            *\n*╚═══❖══▣══▣══❖═══╝*\n\n*▷Creator: Ameer💫*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*╔═════🔅Git links🔅═════╗*\n           Pikachu\n*❖═Owner Ameer Suhail═❖*\n\n*💠https://github.com/ameer-kallumthodi/pikachu*\n*     Liyamol\n*❖═Owner Saidali═❖*\n\n*💠https://github.com/saidalisaid2/LiyaMol        \n*╚═══❖══▣══▣══❖═══╝*\n\n*▷Creator: Ameer*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    
