exports.run = (client, message, args) => {
   let description = args[0];
   let price = args[1];
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
      "value": message.author,
      "inline": true
    }
  ]
};
message.channel.send({embed})
}
