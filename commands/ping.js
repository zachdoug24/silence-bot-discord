exports.run = (client, message, args) => {
    message.channel.sendMessage('Your have a ping of `' + `${Date.now() - message.createdTimestamp}` + ' ms`.');
}

const Discord = require("discord.js")

module.exports.run = (client, message, args) => {

  let pingEmbed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username}`, `${client.user.avatarURL}`)
        .setDescription(`You have a ping of ${Date.now() - message.createdTimestamp} ms.`)
        .setColor("#4A4A4A")

        channel.message.send(pingEmbed);

        return;
}

module.exports.help = {
  name: "exchange"
}