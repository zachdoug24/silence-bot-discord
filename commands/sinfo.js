const Discord = require("discord.js");
const colors = require("../colors.json")

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
        .setAuthor("Server Information")
        .setColor(`${colors.pink}`)
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name, true)
        .addField("Server Owner", "Deus Corvi#1225", true)
        .addField("Total Members", message.guild.memberCount, true)
        .addField("Created On", message.guild.createdAt)
        .addField("You Joined", message.member.joinedAt);

    message.channel.send(serverembed);
  }

  module.exports.help = {
    name: "guildinfo"
}