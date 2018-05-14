const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Can't find user!");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Quit trying to backseat mod!");
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("What!? A battle of the mods!");

  let kickEmbed = new Discord.RichEmbed()
      .setTitle("New Banned Member")
      .setThumbnail(message.author.displayAvatarURL)
      .setColor("#D0021B")
      .addField("Infraction Type", ":hammer: Ban Hammer")
      .addField("Kicked User", `${kUser} (UID: ${kUser.id})`)
      .addField("Kicked By", `<@${message.author.id}>`)
      .addField("Reason", `${kReason}`)
      .addField("Timestamp", message.createdAt);

  let kickChannel = message.guild.channels.find(`name`, "mod-logs");
  if(!kickChannel) return message.channel.send("Can't find mod-logs channel.");

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);

  return;
}

module.exports.help = {
  name: "kick"
}