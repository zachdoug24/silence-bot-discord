const colors = require("../colors.json")

exports.run = (client, message, args) => {
   message.delete();
   const embed = {
   "description": args.join(" "),
   "color": colors.grey
   };
   message.channel.send({embed})
}
