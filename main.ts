const Discord = require('discord.js')
const bot = new Discord.Client()

const token = ''

bot.on("ready", () => {
    console.log("Bot is running.")
});

bot.login(token)

bot.on('message', (msg: { content: string; reply: (arg0: string) => void; }) => {
    if(msg.content == "hello"){
        msg.reply("hello")
    }
});

bot.login(token)