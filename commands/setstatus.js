const Discord = require("discord.js");
 module.exports.run = async (bot, message, args) => {
        if(!message.author.hasPermission(ADMINISTRATOR)) return message.reply("Ты это не умеешь. ни ломай бота.")
        const typee = args[0];
        const game = args.slice(1).join(' ');
          if(typee == "PLAYING"){
            bot.user.setActivity(game, { type: 'PLAYING' });
          }
          else if(typee == "STREAMING"){
            bot.user.setActivity(game, { type: 'STREAMING' });
          }
          else if(typee == "LISTENING"){
            bot.user.setActivity(game, { type: 'LISTENING' });
          }
          else if(typee == "WATCHING"){
            bot.user.setActivity(game, { type: 'WATCHING' });
          }
          else{
            message.reply("Нет такого статуса!");
          }
         const okkkkk = new Discord.RichEmbed()
            .setTitle('Статус изменен:')
            .setDescription(`Тип: ${typee} | Статус: ${status}`)
            .setFooter('NidolphNetwork');
          message.channel.send(okkkkk);

}
 module.exports.help = {
  name: "setstatus"
}
