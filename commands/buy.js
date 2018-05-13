exports.run = (client, message, args) => {
   let description = args.slice(0)[0].join(" ")
   let price = args.slice(1)[1].join(" ");
   message.delete();
   const embed = {
  "color": 10081886,
  "author": {
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
message.channel.send({embed})
}
