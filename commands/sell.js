exports.run = (client, message, args) => {
   message.delete();
   const embed = {
   "description": message.author + " is wishing to sell " + args.join(" "),
   "color": 0xf93706,
   "author": {
    "name": message.author.username + " is selling something.",
    "icon_url": message.author.displayAvatarURL
   }
  };
   message.channel.send({embed})
}
