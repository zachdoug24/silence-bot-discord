const Discord = require("discord.js");
const colors = require("../colors.json")

module.exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("oof.");
  if(!args[0]) return message.channel.send("oof");
  message.channel.bulkDelete(args[0]).then(() => {
    const embed = {
      "color": colors.red,
      "author": {
        "name": client.user.username,
        "icon_url": client.user.avatarURL
      },
      "timestamp": new Date(),
      "description": "Cleared **" + args[0] + "** messages from the channel."
    };
    message.channel.send({embed}).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}