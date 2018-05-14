const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("Why are you trying to announce something?");
    let aTitle = args.split().charAt(`" `);
    let aMessage = args.slice(0).join(" ");
    let aEmbed = new Discord.RichEmbed()
        .setTitle(`${aTitle}`)
        .setFooter(message.author.username, message.author.displayAvatarURL)
        .setTimestamp()
        .setColor("#4A4A4A")
        .setDescription(`${aMessage}`);
  
    let announceChannel = message.guild.channels.find(`name`, "announcements");
    if(!announceChannel) return message.channel.send("Can't find the annonucement channel..");
  
    message.delete();
    announceChannel.send(aEmbed);
  
    return;
  }

  module.exports.help = {
    name: "announce"
  }