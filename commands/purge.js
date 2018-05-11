exports.run = (client, message, args) => {
   async function purge() {
      message.delete();
      
      if (!message.member.roles.find("name", "King/Queen")) {
        message.channel.send("You need the \`King/Queen\` role to use this command.");
        return;
      }
      
      if (isNaN(args[0])) {
        message.channel.send("Please specify a number. \n Usage: " + config.prefix + "purge <amount>");
        return;
      }
      
      cont fetched = await message.channel.fetchMessages({limit:args[0]});
      console.log(fetched.size + " messages found, deleting...");
      
      message.channel.bulkDelete(fetched)
        .catch(error => message.channel.send("Wrror: ${error}"));
      }
      
      purge();
}
