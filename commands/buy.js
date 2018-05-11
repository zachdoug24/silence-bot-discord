exports.run = (client, message, args) => {
   message.delete();
   const embed = {
   "description": message.author.displayName + " is wishing to buy " + args.join(" "),
   "color": 0x00ff80
   },
   "author": {
    "name": member.displayName + " is buying something.",
    "icon_url": member.user.displayAvatarURL
  };
   message.channel.send({embed})
}
