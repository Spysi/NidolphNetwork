const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let type = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

let what = args.slice(1).join(' ');

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Слушай, а ты уверен, что ты так можешь? :thinking:"); 

if(!type1) return message.channel.send("ДАГ ШО МНЕ ДЕЛАТЬ?! Играть (1), стримить (2), смотреть (3)");

if(!what) return message.channel.send("Что дальше? :thinking:");

bot.user.setActivity(what, {type: type1}

module.exports.help = {

name: "setactivity"

}