const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});


bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

  bot.user.setActivity("твою вебку. Заклей ее.", {type: "WATCHING"});
});

bot.on("message", async message => {
   if(message.author.bot) return;
   if(message.channel.type === "dm") return;
   if(message.content.indexOf(botconfig.prefix) !== 0) return;

   let prefix = botconfig.prefix;
   let messageArray = message.content.split(" ");
   let cmd = messageArray[0];
   let args = messageArray.slice(1);

   let commandfile = bot.commands.get(cmd.slice(prefix.length));
   if(commandfile) commandfile.run(bot,message,args);
  
  /*for(x=0; x < profanities.length; x++){
    if(message.content.toUpperCase() == profanities[x].toUpperCase()){
      if(!message.member.hasPermission("MANAGE_MESSAGES")){
        message.delete();
        message.reply("Не матерись, сапожник!");
      }
    }
  }*/
});

bot.on("guildMemberAdd", async member =>{
  let welcome = member.guild.channels.find('name', "📢-обьявления");
  welcome.send(`Ура! ${member} зашел(ла) к нам. Чувствуй как дома. Но будем надеятся, что он(а) прочитал правила и будет хорошим мальчиком (или девочкой)`)
})

bot.on("guildMemberRemove", async member =>{
  let welcome = member.guild.channels.find('name', "📢-обьявления");
  welcome.send(`Ну е-мое! К сожалению, ${member} ушел от нас. Лучше вернись, мы о тебе уже скучаем!`)
})

bot.login(process.env.bot_token);
