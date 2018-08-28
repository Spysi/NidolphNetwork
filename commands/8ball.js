const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply("Нет вопроса!");
    if(message.content.includes("пидор")){
      if(message.content.includes("я")) return message.reply("Да");
      else return message.reply("сам пидор");
    } 
    let answers = ["да", "нет", "отвечаю, да", "это все знают, да", "ТЫ ШО? Конечно нет", "ниииииииииэээээт", "возможно", "спросите позже", "перезвоните позже", "не знаю", "дайте подумать", "подожди, я погуглю ответ", "сложный вопрос", "ААААААААААА СЛОЖНА", "ОШИБКА СТОП 0x00000000ААААААА"];
    let result = Math.floor((Math.random() * answers.length));

    message.reply(`${answers[result]}`);
}
module.exports.help = {
  name: "8ball"
}
