const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverIcon = message.guild.iconURL;
    let serverEmbed = new Discord.RichEmbed()
    .setDescription("Информация о сервере")
    .setColor("#00c5ff")
    .setThumbnail(serverIcon)
    .addField("Название:", message.guild.name)
    .addField("Создан:", "Дерес ;3 и Спайси", true)
    .addField("Создан в:", message.guild.createdAt)
    .addField("Количество участников:", message.guild.memberCount)
    .addField("Вы присоеденились:", message.member.joinedAt)

     return message.channel.send(serverEmbed);
}
 
module.exports.help = {
  name: "serverinfo"
}