const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
        const typee = args.join(' ');  
        const status = args.slice(1).join(' ');
        client.user.setPresence({ game: { name: status, type: typee } }).catch();

        const okkkkk = new Discord.RichEmbed()
            .setTitle('Статус изменен:')
            .setDescription(`Тип: ${typee} | Статус: ${status}`)
            .setFooter('NidolphNetwork');
message.channel.send(okkkkk);
  
}

module.exports.help = {
  name: "presence"
}
