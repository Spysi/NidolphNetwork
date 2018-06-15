const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Не могу найти такого пользователя!");
    let kreason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Слушай, а ты уверен, что ты так можешь? :thinking:");
    if(kUser.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("Питухов кикать нильзя! :D");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Участник изгнан")
    .setColor("#ff8100")
    .addField("Изгнан:", `${kUser}`)
    .addField("Кто изгнал:", `${message.author}`, true)
    .addField("Время:", message.createdAt)
    .addField("Причина:", kreason)
    .setFooter("Пожалуйста, не нарушайте правила сервера!");

    message.guild.member(kUser).kick(kreason);
    return message.channel.send(kickEmbed);
}
 
module.exports.help = {
  name: "kick"
}
