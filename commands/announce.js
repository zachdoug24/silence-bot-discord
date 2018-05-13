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
   message.channel.send({embed});
},
{
   const channel = member.guild.channels.find('name', 'mod-logs');
    if (!channel) return;
    const embed = {
    "description": "Created an announcement.",
    "color": 4028623,
    "author": {
        "text": message.author.username,
        "icon_url": message.author.displayAvatarURL
    }
  };
  
  channel.send({ embed });
}
