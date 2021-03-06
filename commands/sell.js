const Discord = require("discord.js");
const colors = require("../colors.json")

module.exports.run = (client, message, args) => {
  let price = args[0]
  let cur = args[1]
  let description = args.slice(2).join(" ")

  let sellEmbed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username}`, `${client.user.avatarURL}`)
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL}`)
        .setTimestamp()
        .setColor(`${colors.red}`)
        .addField("Wanting to Sell", `${description}`)
        .addField("Selling Price", `${price} ${cur}`, true)
        .addField("Contact User", `${message.author.tag}`, true)


        let marketplace = message.guild.channels.find(`name`, "marketplace");
        if(!marketplace) return message.channel.send("Couldn't find the marketplace.");

        message.delete().catch(O_o=>{});
        marketplace.send(sellEmbed);

        return;
}

module.exports.help = {
  name: "sell"
}