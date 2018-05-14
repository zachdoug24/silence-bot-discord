const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Quit trying to backseat mod!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("What!? A battle of the mods!");
  
    let banEmbed = new Discord.RichEmbed()
        .setTitle("New Banned Member")
        .setThumbnail(message.author.displayAvatarURL)
        .setColor("#D0021B")
        .addField("Infraction Type", ":scales: Kicked User")
        .addField("Banned User", `${bUser} (UID: ${bUser.id})`)
        .addField("Banned By", `<@${message.author.id}>`)
        .addField("Reason", `${bReason}`)
        .addField("Timestamp", message.createdAt);
  
    let banChannel = message.guild.channels.find(`name`, "mod-logs");
    if(!banChannel) return message.channel.send("Can't find mod-logs channel.");
  
    message.guild.member(bUser).ban(bReason);
    banChannel.send(banEmbed);
  
    return;
  }

module.exports.help = {
    name: "ban"
}