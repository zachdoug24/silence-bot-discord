exports.run = (client, message, args) => {
  let price = args[0]
  let cur = args[1]
  let description = args.slice(2).join(" ")
  message.delete();
  const embed = {
    "color": 2667619,
    "author": {
      "name": client.user.username + " knows someone that wants to buy something.",
      "icon_url": client.user.avatarURL
    },
    "timestamp": new Date(),
    "footer": {
      "text": message.author.username,
      "icon_url": message.author.displayAvatarURL
    },
    "fields": [
      {
        "name": "Wanting to Purchase",
        "value": description
      },
      {
        "name": "Purchase Price",
        "value": price + " " + cur,
        "inline": true
      },
      {
        "name": "Contact User",
        "value": message.author.tag,
        "inline": true
      }
    ]
    
  };
  message.channel.send({ embed });
}