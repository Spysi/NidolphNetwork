const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.reply("все нужные тебе команды находятся в канале #помощь. А правила - в канале #правила.");
}

module.exports.help = {
  name: "help"
}