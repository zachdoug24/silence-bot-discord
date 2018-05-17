const Discord = require("discord.js");
const colors = require("../colors.json")

module.exports.run = (client, message, args) => {
  let have = args[0]
  let cur1 = args[1]
  let want = args[2]
  let cur2 = args[3]

  let exchangeEmbed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username}`, `${client.user.avatarURL}`)
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL}`)
        .setTimestamp()
        .setColor(`${colors.orange}`)
        .addField("Currency Held", `${have} ${cur1}`, true)
        .addField("Currency Wanted", `${want} ${cur2}`, true)
        .addField("Contact User", `${message.author.tag}`, false)


        let marketplace = message.guild.channels.find(`name`, "marketplace");
        if(!marketplace) return message.channel.send("Couldn't find the marketplace.");

        message.delete().catch(O_o=>{});
        marketplace.send(exchangeEmbed);

        return;
}

module.exports.help = {
  name: "exchange"
}