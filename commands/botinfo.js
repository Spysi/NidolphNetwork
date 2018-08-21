const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botIcon = bot.user.displayAvatarURL;
    let botEmbed = new Discord.RichEmbed()
    .setDescription("Информация о боте")
    .setColor("#00c5ff")
    .setThumbnail(botIcon)
    .addField("Название:", bot.user.username)
    .addField("Создатель:", "Дерес ;3#4177")
    .addField("Спасибо за помощь:", "sqdEclipse#5372 (https://vk.com/vlad.ciphersky)") //Эклипс, гордись собой :D | Ору
    .addField("Время создания:", bot.user.createdAt)
    .addField("Специально для сервера:", "Nidolph (https://discord.gg/RnMUg74)")
    .addField("Версия:", "0.2 (Alpha)")

     return message.channel.send(botEmbed);
}
 
module.exports.help = {
  name: "botinfo"
}
