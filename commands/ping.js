const Discord = require("discord.js");
const colors = require("../colors.json")

module.exports.run = (client, message, args) => {

  let pingEmbed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username}`, `${client.user.avatarURL}`)
        .setDescription(`:white_check_mark: ${Date.now() - message.createdTimestamp} ms.`)
        .setColor(`${colors.green}`)

        message.channel.send(pingEmbed);

        return;
}

module.exports.help = {
  name: "exchange"
}