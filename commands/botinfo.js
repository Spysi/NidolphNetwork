const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botIcon = bot.user.displayAvatarURL;
    let botEmbed = new Discord.RichEmbed()
    .setDescription("Информация о боте")
    .setColor("#00c5ff")
    .setThumbnail(botIcon)
    .addField("Название:", bot.user.username)
    .addField("Создан:", "Дерес ;3")
    .addField("Спасибо за помощь:", "sqdEclipse") //Эклипс, гордись собой :D
    .addField("Создан в:", bot.user.createdAt)
    .addField("Специально для сервера:", "Nidolph (discord.gg/8QFREG2)")
    .addField("Версия:", "0.2.0 (Alpha)")

     return message.channel.send(botEmbed);
}
 
module.exports.help = {
  name: "botinfo"
}
