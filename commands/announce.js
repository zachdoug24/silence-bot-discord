const Discord = require("discord.js");
const colors = require("../colors.json")

module.exports.run = (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("Why are you trying to announce something?");
    let text = args.join(" ");
    let eArray = text.split(`" `);
    for(var i=0; i < eArray.length; i++) {
      eArray[i] = eArray[i].replace(/"/g,``);
    }
    let eTitle = eArray[0];
    let eDescription = eArray[1];
    let aEmbed = new Discord.RichEmbed()
        .setAuthor(`${eTitle}`)
        .setFooter(message.author.username, message.author.displayAvatarURL)
        .setTimestamp()
        .setColor(`${colors.blue}`)
        .setDescription(`${eDescription}`);
  
    let announceChannel = message.guild.channels.find(`name`, "announcements");
    if(!announceChannel) return message.channel.send("Can't find the announcement channel..");
  
    message.delete().catch(O_o=>{});
    announceChannel.send(aEmbed);
  
    return;
  }

  module.exports.help = {
    name: "announce"
  }