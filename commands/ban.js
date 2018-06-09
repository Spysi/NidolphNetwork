const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Не могу найти такого пользователя!");
    let breason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Слушай, а ты уверен, что ты так можешь? :thinking:");
    if(bUser.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("Питухов банить низя! :D");

    let serverIcon = message.guild.iconURL;
    let banEmbed = new Discord.RichEmbed()
    .setDescription("Участник забанен")
    .setColor("#ff0000")
    .addField("Забанен:", `${bUser}`)
    .addField("Кто забанил:", `${message.author}`, true)
    .addField("Время:", message.createdAt)
    .addField("Причина:", breason)
    .setFooter("Пожалуйста, не нарушайте правила сервера!");

    message.guild.member(bUser).ban(breason);
    return message.channel.send(banEmbed);
}
 
module.exports.help = {
  name: "ban"
}
