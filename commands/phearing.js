const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const status = args.join(" ");
  client.user.setPresence({ game: { name: "{$status}", type: 2 } }).catch();
  message.channel.send(`:ok_hand:`);
}

module.exports.help = {
  name: "phearing"
}
