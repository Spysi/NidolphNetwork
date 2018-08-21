const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  
        const typee = args.slice(0).join(' ');  
        const status = args.slice(1).join(' ');
        client.user.setPresence({ game: { name: status, type: typee } }).catch();

        const embed = new Discord.RichEmbed()
            .setTitle('Статус изменен:')
            .setDescription(`Тип: ${typee} | Статус: ${status}`)
            .setFooter('NidolphNetwork');
message.channel.send({embed});
}
module.exports.help = {
  name: "setactivity"
}
