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

client.on("guildMemberAdd", (member) => {
    const welcome = new Discord.RichEmbed()
    .setTitle("👐 Bienvenue 👐")
    .setColor("#5599ff")
    .setDescription("Pour rentré sur le serveur, va dans le salon [#vérification] et envoie le code suivant \"nf5482\", à bientôt sur le serveur de NoobFactory 👋 !")
    .setFooter("Bot de TheMisterObvious");
    
    member.addRoles(["544598999177625660", "544600219396997141"]);
    member.sendMessage(welcome);
});
    

client.on("message", message => {
    if (message.channel.id === "544613382548881408") {
      if (message.content ===  "nf5482") {   
          message.member.addRole("544580348508373002");
          message.channel.delete(1);
      }
    }
});

client.on("message", message => {
    if (message.content.startsWith(prefix +"clear" || prefix +"purge")) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.sendMessage("**Vous n'avez pas la permission \`MANAGE_MESSAGES\` !!!**");
        } else {
        var nombre = message.content.substring(8);
            
        message.channel.delete(nombre + 1);
        }
    }
});

client.login(process.env.TOKEN);
