exports.run = (client, message, [mention, ...reason]) => {
  const modRole = message.guild.roles.find("name", "Jack");
  if (!modRole)
    return console.log("The Mods role does not exist");

  if (!message.member.roles.has(modRole.id))
    return message.reply("You can't use this command.");

  if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to kick");

  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("");

  const kickMember = message.mentions.members.first();
  const embed = {
    "color": 13632027,
    "author": {
      "name": member.displayName + " has been kicked.",
      "icon_url": member.user.displayAvatarURL
    },
    "fields": [
      {
        "name": "Reason",
        "value": reason
      }
    ]
  };

  kickMember.kick(reason.join(" ")).then(member => {
    message.reply(send({embed}));
  });
};