exports.run = (client, message, args) => {
  let price = args[0]
  let description = args.slice(1).join(" ")
  message.delete();
  const embed = {
    "color": 2667619,
    "author": {
      "name": client.user.username,
      "icon_url": client.user.avatarURL
    },
    "timestamp": new Date(),
    "footer": {
      "name": message.author.username,
      "icon_url": message.author.displayAvatarURL
    },
    "fields": [
      {
        "name": "Wanting to Purchase",
        "value": description
      },
      {
        "name": "Purchase Price",
        "value": price,
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