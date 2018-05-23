const Discord = require("discord.js");
const colors = require("../colors.json")

module.exports.run = async (bot, message, args) => {
    let SelfRoleMainEmbed = new Discord.RichEmbed()
        .setColor(`${colors.blue}`)
        .addField("Colored Roles", "To view role names for colors type: `s.self-roles color`", true)
        .addField("Gender Roles", "To view role names for colors type: `s.self-roles gender`", true)
    message.channel.send(SelfRoleMainEmbed);
  }

