const Discord = require("discord.js");
const colors = require("../colors.json")

module.exports.run = async (bot, message, args) => {
    let bIcon = bot.user.displayAvatarURL;
    let serverembed = new Discord.RichEmbed()
        .setColor(`${colors.pink}`)
        .setThumbnail(bIcon)
        .addField("General Commands", "**;report** - Report a user of the server.\nUsage is `;report @user Reason`\n\n**;buy** - List something you'd like to purchase.\nUsage: `;buy Price Currency Description`\n\n**;sell** - List something you'd like to sell.\nUsage: `;sell Price Currency Description`\n\n**;exchange** - List currency you'd like to exchange.\nUsage: `;exchange AmountHeld Currency AmountWanted Currency`\n", true)
    message.channel.send(serverembed);
  }