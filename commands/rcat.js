const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let {body} = await superagent
    .get ('http:\/\/aws.random.cat\/meow');

    let catEmbed = new Discord.RichEmbed()
    .setColor('#00ff00')
    .setTitle("Котик :3 :cat:")
    .setImage(body.file);

    message.channel.send(catEmbed);
}

module.exports.help = {
    name: "rcat"
}