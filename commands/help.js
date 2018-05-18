const Discord = require("discord.js");
const colors = require("../colors.json")

module.exports.run = async (bot, message, args) => {
    let bIcon = bot.user.displayAvatarURL;
    let serverembed = new Discord.RichEmbed()
        .setAuthor("Bot Commands")
        .setColor(`${colors.pink}`)
        .setThumbnail(bIcon)
        .addField("General Commands", "Use `;general`", true)
        .addField("Fun Commands", "Use `;fun`", true)
        .addField("Misc. Commands", "Use `;misc`", true)
        .addField("Staff Commands", "Use `;staff`", true)
    message.channel.send(serverembed);
  }