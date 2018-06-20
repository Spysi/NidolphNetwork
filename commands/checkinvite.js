const Discord = require("discord.js");
let ayy = client.emojis.get("456779732470726658");

module.exports.run = async (bot, message, args) => {
    let err = false;
    ['MANAGE_MESSAGES'].forEach(function (item) {
                if (!message.member.hasPermission(item, false, true, true)) {
                    err = true;
                }
            });
    if (err) return message.channel.send({embed: {
  color: 1111111,
  title: "Ошибка:",
  description: ayy + ` У вас нету прав для доступа к этой команде.`
}});
	const members = message.guild.members.filter(member => member.user.presence.game && /(discord\.(gg|io|me|li)\/.+|discordapp\.com\/invite\/.+)/i.test(member.user.presence.game.name));

		const send = new Discord.RichEmbed()
            .setTitle('Проверка ссылки в статусе:')
            .setDescription(members.map(member => `\`${member.id}\` ${member.displayName}`).join("\n") || "Никто не имеет ссылки на приглашение в качестве названия игры.")
            .setFooter(client.user.tag);
		
		const okkkk = new Discord.RichEmbed()
            .setTitle('Уведомление:')
            .setDescription(`${message.author}, проверьте свои личные сообщения`)
            .setFooter(client.user.tag);
		
	message.author.send({embed: send});
		message.channel.send({embed: okkkk});
}
 
module.exports.help = {
  name: "checkinvite"
}
