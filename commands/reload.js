const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== "303872342457843722" || message.author.id !== "178404926869733376") return message.reply("У Вас недостаточно прав для совершения данного действия");
    if(!args || args.size < 1) return message.reply("Вы должны указать кодовое имя команды");
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.channel.send(`Команда ${args[0]} перезагружена.`);
};

module.exports.help = {
  name: "reload"
}
