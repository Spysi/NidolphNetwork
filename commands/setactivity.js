const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let type = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Слушай, а ты уверен, что ты так можешь? :thinking:"); 

if(!type) return message.channel.send("ДАГ ШО МНЕ ДЕЛАТЬ?! Играть (1), стримить (2), смотреть (3)");

}

module.exports.help = {

name: "kick"

}

