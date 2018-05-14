exports.run = (bot, message, args) => {
  let kickedUser = message.guild.member(message.mentions.users.first() || message.guild.membets.get(args[0]));
  if(!kickedUser) return message.channel.send("Couldn't find user.");
  let reason = args.join(" ").slice(22);
  let kickEmbed = new Discord.RichEmbed()
      .setDescription("Kick Information")
      .setColor("#D0021B")
      .addField("Kicked User", `${kickedUser}`, true)
      .addField("Kicked User ID", `${kickedUser.id}`, true)
      .addField("Kicked By", `${message.author}`)
      .addField("Reason", reason)
      .addField("Timestamp", message.createdAt);
  
  let modchannel = message.guild.channels.find(`name`, "mod-logs");
      if(!modechannel) return message.channel.send("Couldn't find mod-logs channel.");

  const modRole = message.guild.roles.find("name", "Jack");
  if (!modRole)
    return console.log("The Jack role does not exist");
  if (!message.member.roles.has(modRole.id))
    return message.reply("You can't use this command.");
  if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to kick");
  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("");

  const kickMember = message.mentions.members.first();

    kickMember.kick(reason.join(" ")).then(member => {
    modchannel.channel.send(kickembed);
    return;
  });
}