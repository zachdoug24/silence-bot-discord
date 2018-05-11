exports.run = (client, message, args) => {
   message.delete()
   const embed = new Discord.RichEmbed()
   .setColor(0x6a6a6a)
   .setDescription("" + message.author.username + " says: " +args.join(" "))
   message.channel.send({embed})
}
