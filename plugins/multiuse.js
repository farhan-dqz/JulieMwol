/* Copyright (C) 2021 farhan-dqz.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
/*const got = require('got');
const fs = require('fs');*/
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');
const { errorMessage, infoMessage } = require('../helpers');

/*
if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'song ?(.*)', fromMe: true}, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_SONG);
	const url = `https://tobz-api.herokuapp.com/api/joox?q=${match[1]}&apikey=BotWeA`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🎼 ' + Lang.SONG +':* ```' + match[1] + '```\n\n' +
		'*🎧 ' + Lang.ALBUM +':* ```' + json.result.album + '```\n' + 
		'*🔊 ' + Lang.TITLE +':* ```' + json.result.judul + '```\n' +
		'*🎚️ ' + Lang.PUBLICATION +':* ```' + json.result.dipublikasi + '```\n' + 
		'*🎙️ ' + Lang.SONGL +':* ```' + json.result.mp3 + '```\n' , MessageType.text);
		
		return await message.sendMessage(from,await getBuffer(`json.result.mp3`, {method: 'get'})  , MessageType.audio, {quoted: mek, mimetype: Mimetype.mp4audio, ptt: true});
    
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDS, MessageType.text);
	}
});*/


Asena.addCommand({ pattern: 'joox ?(.*)', fromMe: true, dontAddCommandList: true}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(Lang.NEED_WORDIGTV))

    await message.sendMessage(infoMessage("Loading"))

    await axios
      .get(`https://gratisancok.herokuapp.com/api/joox/?kata=${userName}&apikey=ZailaniGans`)
      .then(async (response) => {
        const {
          mp3_url,
          judul,
	artist,
	album,	
        } = response.data.result.result

        const profileBuffer = await axios.get(mp3_url, {responseType: 'arraybuffer'})

        const msg = `${"Title"}*: ${judul}\n${"Artist"}*: ${artist}\n${"Album"}*: ${album}\n${mp3_url}`

	 await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.document)
	    await message.sendMessage(message.jid,msg, MessageType.document,)
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error.Please check the song name.")),
      )
  },
)








Asena.addCommand({ pattern: 'insta ?(.*)', fromMe: true, desc: "Download content from insta link"}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(Lang.NEED_WORDIGTV))

    await message.sendMessage(infoMessage("Loading"))

    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/igdown?url=${userName}`)
      .then(async (response) => {
        const {
          url,
          type,
        } = response.data.result[0]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `${type}`

	 if (msg === 'image') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg,
        })}
		 	 
	if (msg === 'video') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: msg,
        })}
	
        
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("error.Please check the link")),
      )
  },
)




Asena.addCommand({ pattern: 'fb ?(.*)', fromMe: true, desc: Lang.FBDESC }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(Lang.NEED_WORDFB))

    await message.sendMessage(infoMessage(Lang.LOADINGTV))

    await axios
      .get(`https://videfikri.com/api/fbdl/?urlfb=${userName}`)
      .then(async (response) => {
        const {
          url,
          judul,
        } = response.data.result

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${Lang.CAPTION}*: ${judul}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(Lang.NOT_FOUNDFB )),
      )
  },
)


Asena.addCommand({ pattern: 'twt ?(.*)', fromMe: true, desc: "download from twitter links" }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("Give proper link!"))

    await message.sendMessage(infoMessage(Lang.LOADINGTV))

    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/twdown?url=${userName}`)
      .then(async (response) => {
        const {
          format,
          result,
        } = response.data

        const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})

        const msg = `${format}`


      if (msg === 'Image/jpg or png') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg,
        })}
		 	 
	if (msg === 'video/mp4') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: msg,
        })}

      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error" )),
      )
  },
)





Asena.addCommand({ pattern: 'mp3yt ?(.*)', fromMe: true, desc: "Try this if .song is not giving results.\n Works for youtube links only"}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("Need a yt link"))

    await message.sendMessage(infoMessage("Loading..."))

    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/ytmp3?url=${userName}`)
      .then(async (response) => {
        const {
          url,
          filesize,
	  quality,	
        } = response.data.result[0]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${"quality"}*: ${quality}\n*${"file size"}*: ${filesize}\n*${"url"}*: ${url}`
	    
        await message.sendMessage(msg)
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.audio, {
         quoted : message.data
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Song Not Found!" )),
      )
  },
)

Asena.addCommand({ pattern: 'mp4yt ?(.*)', fromMe: true , desc: "Use this if .videos is not working. Provide the youtube link \n Use mp4yt2,mp4yt3 for more quality"}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("Provide the video"))

    await message.sendMessage(infoMessage("Loading..."))

  await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/ytmp4?url=${userName}`)
      .then(async (response) => {
        const {
          quality,
          url,	
        } = response.data.result[0]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${"Quality"}*: ${quality}`
	    

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error.\n Filesize exceeded or invalid link" )),
      )
  },
)


Asena.addCommand({ pattern: 'mp4yt2 ?(.*)', fromMe: true  ,  dontAddCommandList: true}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("Provide the video"))

    await message.sendMessage(infoMessage("Loading..."))

  await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/ytmp4?url=${userName}`)
      .then(async (response) => {
        const {
          quality,
          url,	
        } = response.data.result[1]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${"Quality"}*: ${quality}`
	    

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error.\n Filesize exceeded or invalid link" )),
      )
  },
)


Asena.addCommand({ pattern: 'mp4yt3 ?(.*)', fromMe: true ,  dontAddCommandList: true}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("Provide the video"))

    await message.sendMessage(infoMessage("Loading..."))

  await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/ytmp4?url=${userName}`)
      .then(async (response) => {
        const {
          quality,
          url,	
        } = response.data.result[2]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${"Quality"}*: ${quality}`
	    

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error.\n Filesize exceeded or invalid link" )),
      )
  },
)

Asena.addCommand({ pattern: 'show ?(.*)', fromMe: true , desc: "Get info related to tv series and shows"}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("give me the show name"))

    await message.sendMessage(infoMessage("Loading..."))

  await axios
      .get(`http://api.tvmaze.com/search/shows?q=${userName}`)
      .then(async (response) => {
        const {
          name,
          type,	
          language,
           status,
	  officialSite,
	  summary,
        } = response.data[0].show

   
        const msg = `*${"Name"}*: ${name}\n*${"Type"}*: ${type}\n*${"Type"}*: ${status}\n*${"Summary"}*: ${summary}\n*${"Official Site"}*: ${officialSite}`
       
       await message.client.sendMessage(message.jid, msg , MessageType.text);
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Not Found" )),
      )
  },
)

Asena.addCommand({ pattern: 'show ?(.*)', fromMe: true , dontAddCommandList: true}, async (message, match) => {

 const userName = match[1]
    
  await axios
      .get(`http://api.tvmaze.com/search/shows?q=${userName}`)
      .then(async (response) => {
        const {
          original,
        } = response.data[0].show.image

        const profileBuffer = await axios.get(original, {responseType: 'arraybuffer'})
     
        const msg = ``
       
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.sendMessage(""),
      )
  },
)

Asena.addCommand({ pattern: 'lipint ?(.*)', fromMe: true, desc: "download from pinterest links" }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("Give proper link!"))

    await message.sendMessage(infoMessage("Loading"))

    await axios
      .get(`https://scrap.terhambar.com/pin?url=${userName}`)
      .then(async (response) => {
        const {
          url,
        } = response.data.result

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${"Url"}*: ${url}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error" )),
      )
  },
)




Asena.addCommand({ pattern: 'story ?(.*)', fromMe: true,  desc:"Download instagram stories of the given username"}, async (message, match) => {

	
if (match[1].includes(';')) {
        var split = match[1].split(';');
        i = split[1];
        userName = split[0];
         }
	else {
        userName = match[1];
        i = '0';
        }	
	

    if (!userName) return await message.sendMessage(errorMessage("Need username"))

    await message.sendMessage(infoMessage("Loading"))


	  
	
 /* for (var i = 0; i < (count < 100 ? count : 1); i++) {*/
          
    await axios
      .get(`http://lolhuman.herokuapp.com/api/igstory/${userName}?apikey=7cd4d26836bbc3615812c7fa`)
      .then(async (response) => {
        const {
          i,
        } = response.data.result

        const profileBuffer = await axios.get('i', {responseType: 'arraybuffer'})

	await message.sendMessage(i)
	  await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          quoted: message.data,
        })
		 	 
	 await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          quoted: message.data,
        })

      })
      /*.catch(
        async (err) => await message.client.sendMessage(message.jid,"Error", MessageType.text, {quoted: message.data}),
      )*/
  },
)
}
else if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'song ?(.*)', fromMe: false}, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_SONG);
	const url = `https://tobz-api.herokuapp.com/api/joox?q=${match[1]}&apikey=BotWeA`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🎼 ' + Lang.SONG +':* ```' + match[1] + '```\n\n' +
		'*🎧 ' + Lang.ALBUM +':* ```' + json.result.album + '```\n' + 
		'*🔊 ' + Lang.TITLE +':* ```' + json.result.judul + '```\n' +
		'*🎚️ ' + Lang.PUBLICATION +':* ```' + json.result.dipublikasi + '```\n' + 
		'*🎙️ ' + Lang.SONGL +':* ```' + json.result.mp3 + '```\n' , MessageType.text);
		
		return await message.sendMessage(from,await getBuffer(`json.result.mp3`, {method: 'get'})  , MessageType.audio, {quoted: mek, mimetype: Mimetype.mp4audio, ptt: true});
    
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDS, MessageType.text);
	}
});*/


Asena.addCommand({ pattern: 'joox ?(.*)', fromMe: false, dontAddCommandList: true}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(Lang.NEED_WORDIGTV))

    await message.sendMessage(infoMessage("Loading"))

    await axios
      .get(`https://gratisancok.herokuapp.com/api/joox/?kata=${userName}&apikey=ZailaniGans`)
      .then(async (response) => {
        const {
          mp3_url,
          judul,
	artist,
	album,	
        } = response.data.result.result

        const profileBuffer = await axios.get(mp3_url, {responseType: 'arraybuffer'})

        const msg = `${"Title"}*: ${judul}\n${"Artist"}*: ${artist}\n${"Album"}*: ${album}\n${mp3_url}`

	 await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.document)
	    await message.sendMessage(message.jid,msg, MessageType.document,)
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error.Please check the song name.")),
      )
  },
)








Asena.addCommand({ pattern: 'insta ?(.*)', fromMe: false, desc: "Download content from insta link"}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(Lang.NEED_WORDIGTV))

    await message.sendMessage(infoMessage("Loading"))

    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/igdown?url=${userName}`)
      .then(async (response) => {
        const {
          url,
          type,
        } = response.data.result[0]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `${type}`

	 if (msg === 'image') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg,
        })}
		 	 
	if (msg === 'video') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: msg,
        })}
	
        
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("error.Please check the link")),
      )
  },
)




Asena.addCommand({ pattern: 'fb ?(.*)', fromMe: false, desc: Lang.FBDESC }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(Lang.NEED_WORDFB))

    await message.sendMessage(infoMessage(Lang.LOADINGTV))

    await axios
      .get(`https://videfikri.com/api/fbdl/?urlfb=${userName}`)
      .then(async (response) => {
        const {
          url,
          judul,
        } = response.data.result

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${Lang.CAPTION}*: ${judul}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(Lang.NOT_FOUNDFB )),
      )
  },
)


Asena.addCommand({ pattern: 'twt ?(.*)', fromMe: false, desc: "download from twitter links" }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("Give proper link!"))

    await message.sendMessage(infoMessage(Lang.LOADINGTV))

    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/twdown?url=${userName}`)
      .then(async (response) => {
        const {
          format,
          result,
        } = response.data

        const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})

        const msg = `${format}`


      if (msg === 'Image/jpg or png') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg,
        })}
		 	 
	if (msg === 'video/mp4') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: msg,
        })}

      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error" )),
      )
  },
)





Asena.addCommand({ pattern: 'mp3yt ?(.*)', fromMe: false, desc: "Try this if .song is not giving results.\n Works for youtube links only"}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("Need a yt link"))

    await message.sendMessage(infoMessage("Loading..."))

    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/ytmp3?url=${userName}`)
      .then(async (response) => {
        const {
          url,
          filesize,
	  quality,	
        } = response.data.result[0]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${"quality"}*: ${quality}\n*${"file size"}*: ${filesize}\n*${"url"}*: ${url}`
	    
        await message.sendMessage(msg)
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.audio, {
         quoted : message.data
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Song Not Found!" )),
      )
  },
)

Asena.addCommand({ pattern: 'mp4yt ?(.*)', fromMe: false , desc: "Use this if .videos is not working. Provide the youtube link \n Use mp4yt2,mp4yt3 for more quality"}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("Provide the video"))

    await message.sendMessage(infoMessage("Loading..."))

  await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/ytmp4?url=${userName}`)
      .then(async (response) => {
        const {
          quality,
          url,	
        } = response.data.result[0]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${"Quality"}*: ${quality}`
	    

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error.\n Filesize exceeded or invalid link" )),
      )
  },
)


Asena.addCommand({ pattern: 'mp4yt2 ?(.*)', fromMe: false  ,  dontAddCommandList: true}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("Provide the video"))

    await message.sendMessage(infoMessage("Loading..."))

  await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/ytmp4?url=${userName}`)
      .then(async (response) => {
        const {
          quality,
          url,	
        } = response.data.result[1]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${"Quality"}*: ${quality}`
	    

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error.\n Filesize exceeded or invalid link" )),
      )
  },
)


Asena.addCommand({ pattern: 'mp4yt3 ?(.*)', fromMe: false ,  dontAddCommandList: true}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("Provide the video"))

    await message.sendMessage(infoMessage("Loading..."))

  await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/ytmp4?url=${userName}`)
      .then(async (response) => {
        const {
          quality,
          url,	
        } = response.data.result[2]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${"Quality"}*: ${quality}`
	    

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error.\n Filesize exceeded or invalid link" )),
      )
  },
)

Asena.addCommand({ pattern: 'show ?(.*)', fromMe: false , desc: "Get info related to tv series and shows"}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("give me the show name"))

    await message.sendMessage(infoMessage("Loading..."))

  await axios
      .get(`http://api.tvmaze.com/search/shows?q=${userName}`)
      .then(async (response) => {
        const {
          name,
          type,	
          language,
           status,
	  officialSite,
	  summary,
        } = response.data[0].show

   
        const msg = `*${"Name"}*: ${name}\n*${"Type"}*: ${type}\n*${"Type"}*: ${status}\n*${"Summary"}*: ${summary}\n*${"Official Site"}*: ${officialSite}`
       
       await message.client.sendMessage(message.jid, msg , MessageType.text);
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Not Found" )),
      )
  },
)

Asena.addCommand({ pattern: 'show ?(.*)', fromMe: false , dontAddCommandList: true}, async (message, match) => {

 const userName = match[1]
    
  await axios
      .get(`http://api.tvmaze.com/search/shows?q=${userName}`)
      .then(async (response) => {
        const {
          original,
        } = response.data[0].show.image

        const profileBuffer = await axios.get(original, {responseType: 'arraybuffer'})
     
        const msg = ``
       
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.sendMessage(""),
      )
  },
)

Asena.addCommand({ pattern: 'lipint ?(.*)', fromMe: false, desc: "download from pinterest links" }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("Give proper link!"))

    await message.sendMessage(infoMessage("Loading"))

    await axios
      .get(`https://scrap.terhambar.com/pin?url=${userName}`)
      .then(async (response) => {
        const {
          url,
        } = response.data.result

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${"Url"}*: ${url}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error" )),
      )
  },
)




Asena.addCommand({ pattern: 'story ?(.*)', fromMe: false,  desc:"Download instagram stories of the given username"}, async (message, match) => {

	
if (match[1].includes(';')) {
        var split = match[1].split(';');
        i = split[1];
        userName = split[0];
         }
	else {
        userName = match[1];
        i = '0';
        }	
	

    if (!userName) return await message.sendMessage(errorMessage("Need username"))

    await message.sendMessage(infoMessage("Loading"))


	  
	
 /* for (var i = 0; i < (count < 100 ? count : 1); i++) {*/
          
    await axios
      .get(`http://lolhuman.herokuapp.com/api/igstory/${userName}?apikey=7cd4d26836bbc3615812c7fa`)
      .then(async (response) => {
        const {
          i,
        } = response.data.result

        const profileBuffer = await axios.get('i', {responseType: 'arraybuffer'})

	await message.sendMessage(i)
	  await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          quoted: message.data,
        })
		 	 
	 await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          quoted: message.data,
        })

      })
      /*.catch(
        async (err) => await message.client.sendMessage(message.jid,"Error", MessageType.text, {quoted: message.data}),
      )*/
  },
)
}
