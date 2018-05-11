exports.run = (client, message, args) => {
   message.delete();
   const embed = {
   "description": """ + message.author.username + " says: " +args.join(" ")",
   "color": 0x6a6a6a,
   };
   message.channel.send({embed})
}
