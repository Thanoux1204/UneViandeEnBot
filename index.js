const Discord = require('discord.js');
const bot = new Discord.Client();
const Google = require('./google')

var prefix = (",")

bot.on('ready', function() {
    bot.user.setGame("Command: ,help");
    console.log("Connectedç");
});

bot.on('guildMemberAdd', function (member) {

    member.creadteDM().then(function (channel) {

        return channel.send('Bienvenue sur le discord ! Si tu à une question, hésite pas à demander a un modérateur ' + member.displayName)
    }).catch(console.error)
})

bot.login(process.env.TOKEN);


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
    if(Google.match(message)){
        return Google.action(message)
    }
});
