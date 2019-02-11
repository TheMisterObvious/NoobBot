const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = "n!";
var mention = "<@544560443776040980>";

client.on("ready", () => {
var memberCount = client.users.size;
var servercount = client.guilds.size;
    client.user.setActivity(prefix +'help')
    client.user.setAvatar('./avatar.jpg')
    var servers = client.guilds.array().map(g => g.name).join(',');
    console.log("--------------------------------------");
console.log('[!]Connexion en cours... \n[!]Veuillez Patienté! \n[!]Les évenement sont après ! :)  \n[!]Les préfix actuelle:  ' + prefix + "\n[!]Mentions = " + mention + "\n[!]Nombre de membres: " + memberCount + "\n[!]Nombre de serveurs: " + servercount);
});

client.on("message", message => {
  if (message.channel.id === "544560985457819655") {
      if (message.content ===  "nf5482") {          
          message.guildMember.addRole("544580348508373002");
      }
  }
});

client.login(process.env.TOKEN);
