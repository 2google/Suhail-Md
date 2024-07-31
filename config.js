const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="cocody,abatta."  


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ la pression est là en permanence " 


global.devs = "2250555236730" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250555236730";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_54_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY5LFxuICAgICAgICAzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDY3LFxuICAgICAgICAzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk2LFxuICAgICAgICAzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc4LFxuICAgICAgICA4NixcbiAgICAgICAgMTAwLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgODEsXG4gICAgICAgIDIwLFxuICAgICAgICA3NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5LFxuICAgICAgICAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDU3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNyxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDMyLFxuICAgICAgICA3MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU0LFxuICAgICAgICAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAzOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDgyLFxuICAgICAgICAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRkJ5RlV1ZDNhS1hxUXVoalZjOFRnTzdTYWdLMXRHcHpOSGlVTHRTVmJ0WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS3pJamR6OUhUVUdMSmZUMjA2c3l4QVwiLFxuICBcInBob25lSWRcIjogXCIzZTliZDUyNi1hZDZlLTQzZDQtOTEzYS02MjllNDk4YmUyNGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgMTg3LFxuICAgICAgMTUwLFxuICAgICAgMjI3LFxuICAgICAgMjEwLFxuICAgICAgMjA0LFxuICAgICAgMTE4LFxuICAgICAgMTI3LFxuICAgICAgMTkxLFxuICAgICAgMTg3LFxuICAgICAgNDMsXG4gICAgICA4OSxcbiAgICAgIDkwLFxuICAgICAgMTUyLFxuICAgICAgMTc3LFxuICAgICAgODAsXG4gICAgICAyMCxcbiAgICAgIDYzLFxuICAgICAgNjcsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjcsXG4gICAgICAyNDIsXG4gICAgICAxMzUsXG4gICAgICAzOCxcbiAgICAgIDk4LFxuICAgICAgNjAsXG4gICAgICAxOTUsXG4gICAgICAxMDMsXG4gICAgICAxMDQsXG4gICAgICAzMSxcbiAgICAgIDE3NixcbiAgICAgIDE2OSxcbiAgICAgIDg0LFxuICAgICAgODAsXG4gICAgICAxOTIsXG4gICAgICAxODksXG4gICAgICAyMyxcbiAgICAgIDEzNSxcbiAgICAgIDEyNCxcbiAgICAgIDcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnJZcjg4SEVPcmY2ck1HR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwVzlJVFpCc3dJMXpJVUFmV0lFTFdhV3VneEYrZDdGd0pva3k0OEpIT1IwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFUUHdld1FIOU4vSDkrV3FsVHJ0MkFZeld2NTg3aDFFNHBkWUFaS2kyOERwRUZ3Y0ZpVXVKTkVxSGVlT2lzakZZMFFoRjNmbER6d0JhUVhaNUNtMUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkY4Zm1iYjMzTWpUenhwNnQwN0cvekhXNWxURzl4SUt1NDNCVHMrMWxXRnBzc2ZxdE03elZwZmhpakozRFo5ME1INjRDQ0dCYzA4YzdaaTlhVGxJamlnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1NTUyMzY3MzA6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjcwNTI1NzEyMzQ1MjE6MTBAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU1NTIzNjczMDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkzMTY0NjJcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『  』```", //*『"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "douchy",
  ownername:process.env.OWNER_NAME|| "douchy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  " la permanence "  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
