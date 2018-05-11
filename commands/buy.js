exports.run = (client, message, args) => {
   message.delete();
   const embed = {
   "description": message.author + " is wishing to buy " + args.join(" "),
   "color": 0x00ff80,
   "author": {
    "name": message.author.username + " is buying something.",
    "icon_url": message.author.displayAvatarURL
   }
  };
   message.channel.send({embed})
}
