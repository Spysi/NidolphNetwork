const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Не могу найти такого пользователя.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("низя.");
  }
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Слушай, а ты уверен, что ты так можешь? :thinking:");
  let muterole = message.guild.roles.find(`name`, "Заглушенные");
  let muteReason = args.join(" ").slice(22);
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Заглушенные",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Вы не указали время!");

  await(tomute.addRole(muterole.id));
  let muteEmbed = new Discord.RichEmbed()
  .setDescription("Участник заглушен")
  .setColor("#f2f20d")
  .addField("Заглушен:", `${tomute}`)
  .addField("Кем заглушен:", `${message.author}`)
  .addField("Время:", message.createdAt)
  .addField("Заглушен на:", `${ms(ms(mutetime))}`)
  .addField("Причина:", muteReason)
  .setFooter("Пожалуйста, не нарушайте правила сервера!");

  message.channel.send(muteEmbed);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    let unmuteEmbed = new Discord.RichEmbed()
    .setDescription("Участник разглушен")
    .setColor("#66ff33")
    .addField("Разглушен:", `${tomute}`)
    .addField("Был заглушен на:", `${ms(ms(mutetime))}`)
    .addField("Причина:", muteReason)
    .setFooter("Пожалуйста, не нарушайте правила сервера!");

    message.channel.send(unmuteEmbed);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "mute"
}
