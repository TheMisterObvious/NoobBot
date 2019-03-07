const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = "n!";
var mention = "<@544560443776040980>";
var unverifiedRole = "544600219396997141";
var verifiedRole = "544580348508373002";
var botRole = "544598583605985291";
var visitorRole = "544598999177625660";
var recruitRole = "544294721254850605";
var memberRole = "544294361383305245";
var officerRole = "544293390112784384";
var chiefRole = "544293096939192320";

client.on("ready", () => {
var memberCount = client.users.size;
var servercount = client.guilds.size;
    client.user.setActivity(prefix +'help')
    client.user.setAvatar('./avatar.jpg')
    var servers = client.guilds.array().map(g => g.name).join(',');
    console.log("--------------------------------------");
console.log('[!]Connexion en cours... \n[!]Veuillez Patienté! \n[!]Les évenement sont après ! :)  \n[!]Les préfix actuelle:  ' + prefix + "\n[!]Mentions = " + mention + "\n[!]Nombre de membres: " + memberCount + "\n[!]Nombre de serveurs: " + servercount);
});

//Bienvenue

client.on("guildMemberAdd", (member) => {
    
    var welcomechannel = member.guild.channels.find("id", "544622157062209606");
    var welcomeimage = member.user.displayAvatarURL;
    
    const welcomedm = new Discord.RichEmbed()
    .setTitle("👐 Bienvenue 👐")
    .setColor("#00ff00")
    .setDescription("Pour rentré sur le serveur, va dans le salon [#vérification] et envoie le code suivant \"nf5482\", à bientôt sur le serveur de NoobFactory 👋 !")
    .setFooter("Bot de TheMisterObvious");
    
    const welcomemsg = new Discord.RichEmbed()
    .setTitle("👐 Bienvenue 👐")
    .setColor("#00ff00")
    .setDescription(`Bienvenue <@${member.user.id}> sur le serveur de la team NoobFactory !`)
    .setThumbnail(welcomeimage)
    .setFooter("Bot de TheMisterObvious");
    
    member.addRoles(["544598999177625660", "544600219396997141"]);
    member.send(welcomedm);
    welcomechannel.send(welcomemsg);
});

//Au revoir

client.on("guildMemberRemove", (member) => {
    
    var goodbyechannel = member.guild.channels.find("id", "544622157062209606");
    var goodbyeimage = member.user.displayAvatarURL;
    
    const goodbyemsg = new Discord.RichEmbed()
    .setTitle("👋 Au revoir 👋")
    .setColor("#ff0000")
    .setDescription(`Au revoir <@${member.user.id}> tu nous manquera 😭 !`)
    .setThumbnail(goodbyeimage)
    .setFooter("Bot de TheMisterObvious");
    
    goodbyechannel.send(goodbyemsg);
});
    
    
    
//Auto-Rôle + FireWall

client.on("message", message => {
    if (message.channel.id === "544613382548881408") {
      if (message.content ===  "nf5482") {   
          message.member.addRole("544580348508373002");
          message.member.removeRole("544600219396997141");
          message.delete(1);
      }
    }
});

//Clear

client.on("message", message => {
    if(message.content.startsWith(prefix +"clear")) {
        if(!message.member.hasPermission("MANAGE_ROLES")) {
            message.channel.send("**Vous n'avez pas la permission d'éxécuté cette commande !**");
        }
        var args = message.content.substr(8);
        if(args.length === 0) {
            message.channel.send("**Merci de préciser le nombre de messages à supprimé !**");
        } else {
            var msg;
            if(args.length === 1){
                msg = 2;
            } else {
                msg = parseInt(args[1]);
            }
            message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
            message.channel.send("**Les messages ont été supprimés avec succès :white_check_mark: !**");
        }
    }
});

//Systeme faction

client.on("message", message => {
    if (message.content.startsWith(prefix +"f")) {
        if (message.content.substring(4).startsWith("promote")) {
            if (!message.member.hasPermission("MANAGE_ROLES")) {
                message.channel.send("**Vous n'avez pas la permission \`MANAGE_ROLES\` !**");
            }
            if (!message.mentions.users.size === 0) {
                message.channel.send("**Merci d'entrer la mention d'un utilisateur !**");
            }
            var pmember = message.mentions.members.first();
            const pembedrm = new Discord.RichEmbed()
            .setTitle("⬆️ Rank Up ⬆️")
            .setColor("#00ff00")
            .setDescription("Bravo, "+ pmember +" tu passe **Membre** de la faction ! \n \n__Ranker:__ "+ message.author)
            .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/180/graduation-cap_1f393.png")
            .setFooter("Bot de TheMisterObvious");
            
            const pembedmo = new Discord.RichEmbed()
            .setTitle("⬆️ Rank Up ⬆️")
            .setColor("0000ff")
            .setDescription("Bravo, "+ pmember +" tu passe **Officier** de la faction ! \n \n__Ranker:__ "+ message.author)
            .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/180/top-hat_1f3a9.png")
            .setFooter("Bot de TheMisterObvious");
            
            if (pmember.roles.has(recruitRole)) {
                pmember.addRole(memberRole);
                pmember.removeRole(recruitRole);
                message.delete(1);
                message.channel.send(pembedrm);
            }
            if (pmember.roles.has(memberRole)) {
                pmember.addRole(officerRole);
                pmember.removeRole(memberRole);
                message.delete(1);
                message.chanel.send(pembedmo);
            }
        }
        if (message.content.substring(4).startsWith("unmote")) {
            if (!message.member.hasPermission("MANAGE_ROLES")) {
                message.channel.send("**Vous n'avez pas la permission \`MANAGE_ROLES\` !**");
            }
            if (!message.mentions.users.size === 0) {
                message.channel.send("**Merci d'entrer la mention d'un utilisateur !**");
            }
            var umember = message.mentions.members.first();
            
            if (umember.roles.has("544294361383305245")) {
                umember.addRole("544294721254850605");
                umember.removeRole("544294361383305245");
            }
            if (umember.roles.has("544293390112784384")) {
                umember.addRole("544294361383305245");
                umember.removeRole("544293390112784384");
            }
        }
    }
});

client.on("message", message => {
    if message.content("test") {
        message.guild.roles.get(officerRole).members.map(m=>m.user.tag);
    }
});

client.login(process.env.TOKEN);
