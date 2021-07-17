const fs = require('fs');

//_NOME DO CRIADOR DOS STICKERS
authorname = 'Pikachu'
packname = 'Ameer'
  
function addMetadata(packname, author) {	
if (!packname) packname = 'Pikachu'; if (!author) author = 'Ameer';	
author = author.replace(/[^a-zA-Z0-9]/g, '');	
let name = `${author}_${packname}`
if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
const json = {	
"sticker-pack-name": packname,
"sticker-pack-publisher": author,
}
const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
let len = JSON.stringify(json).length	
let last	
if (len > 256) {	
len = len - 256	
bytes.unshift(0x01)	
} else {	
bytes.unshift(0x00)	
}	
if (len < 16) {	
last = len.toString(16)	
last = "0" + len	
} else {	
last = len.toString(16)	
}	
const buf2 = Buffer.from(last, "hex")	
const buf3 = Buffer.from(bytes)	
const buf4 = Buffer.from(JSON.stringify(json))	
const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
return `./src/stickers/${name}.exif`	
})	
}


module.exports = { addMetadata 
