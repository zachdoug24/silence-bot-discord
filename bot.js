const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");
const colors = require("./colors.json");
const bot= new Discord.Client({disableEveryone: true});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

client.login(process.env.BOT_TOKEN);
