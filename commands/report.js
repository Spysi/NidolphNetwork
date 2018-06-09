const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Не могу найти такого пользователя!");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Новый репорт")
    .setColor("#ff9900")
    .addField("Жалоба на:", `${rUser}`)
    .addField("Жалоба от:", `${message.author}`, true)
    .addField("В канале:", message.channel)
    .addField("Время:", message.createdAt, true)
    .addField("Причина:", rreason)
    .setFooter("Просба администрации ответить на жалобу");

    let reportschannel = message.guild.channels.find(`name`, "репорты");
    if(!reportschannel) return message.channel.send("Произошла ошибка. Пожалуйста, обратитесь к администрации.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "report"
}