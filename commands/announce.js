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
   
   const channel = member.guild.channels.find('name', 'mod-logs');
    if (!channel) return;
    const embed = {
    "description": "Welcome " + member + "!\n\nPlease be sure you check out the <#434919397086330883> channel for everything you need to know about your stay here.",
    "color": 5296491,
    "footer": {
      "icon_url": "https://cdn.discordapp.com/avatars/161331492730044416/58457f95610d97c47c380842b2c00fc4.png",
      "text": "Created with Silence"
    },
    "author": {
      "name": member.displayName + " has joined.",
      "icon_url": member.user.displayAvatarURL
    }
  };
  
  channel.send({ embed });
}
