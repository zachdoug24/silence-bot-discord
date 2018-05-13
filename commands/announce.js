exports.run = (client, message, args) => {
   message.delete();
   const embed = {
   "description": args.join(" "),
   "timestamp": new Date(),
   "color": 0x6a6a6a,
   "footer": {
       "text": message.author.username,
       "icon_url": message.author.displayAvatarURL
       }
   };
   message.channel.send({embed})
}
