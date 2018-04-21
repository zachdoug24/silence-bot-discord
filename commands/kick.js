exports.run = (client, message, [mention, ...reason]) => {
  const modRole = message.guild.roles.find("name", "Jack");
  if (!modRole)
    return console.log("The Moderator role does not exist");

  if (!message.member.roles.has(modRole.id))
    return message.reply("You don't have permission to use this command.");

  if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to kick");

  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("");

  const embed = {
   "color": 14700624,
   "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/161331492730044416/58457f95610d97c47c380842b2c00fc4.png",
    "text": "Created with Silence"
  },
  "author": {
    "name": member.displayName + " has been kicked.",
    "icon_url": member.user.displayAvatarURL
  }
};
  kickMember.kick(reason.join(" ")).then(member => {
    message.reply({ embed });
  });
};
