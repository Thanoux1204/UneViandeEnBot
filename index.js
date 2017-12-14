const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = (",")

bot.on('ready', function() {
    bot.user.setGame("Command: ,help");
    console.log("Connectedç");
});

bot.login("MzkwNDk3OTkzMjMwNTE2MjI1.DRK_Ig.7lr3T5L-Dub268AZolZK8vlM2v0");


bot.on('message', message => {
    if (message.content === prefix+ "help"){
        message.channel.sendMessage("Voici la liste des commande: ```\n - ,help : Indique les commandes utiles \n - ,Info : Petites info concernant le bot :p \n - ,thxstudio : Pour afficher le lien du discord de la ThxProduction```");
        
    }

    if(message.content === "Salut"){
        message.reply("Bonjour :)");
        console.log("Commande Salut effectué");
    }

    if(message.content === prefix+ "info"){
        message.channel.sendMessage("Bot crée par Thanoux1204 !");
    }

    if(message.content === prefix+ "thxstudio"){
        message.channel.sendMessage("Lien pour rejoindre le discord de la ThxProduction: https://discord.gg/SD9mAFh");
    }
    if(message.content === prefix+ "stats"){
        message.channel.sendMessage("Il y a actuellement ${message.guild.channels.size} channels sur ce discord \n Il y a actuellement ${message.guilds.members.size} joueurs sur ce discord")
    }
});
