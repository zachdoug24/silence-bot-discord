exports.run = (client, message, args) => {
   message.delete();
   const embed = {
   "title": message.author.username + " is buying something!",
   "description": message.author.name + " is wishing to buy " + args.join(" "),
   "color": 0x00ff80
   };
   message.channel.send({embed})
}
