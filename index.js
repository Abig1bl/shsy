const {Collection, MessageEmbed , MessageActionRow, MessageButton, Modal, TextInputComponent, MessageSelectMenu} = require("discord.js");
const config = require("./config.json")
const Discord = require("discord.js")

const client = new Discord.Client({
  intents: 3276799
});
client.on('ready', () => {
    console.log('Ready Bot Online!');
client.user.setActivity(`.gg/7up `, {type:"PLAYING"})
    
});    

require('events').EventEmitter.defaultMaxListeners = 9999999;
module.exports = client;
client.login(config.token);//توكنك هنا

['events'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
})


process.on("uncaughtException" , err => {
console.log(err);
})

process.on("unhandledRejection" , err => {
console.log(err);
})

process.on("rejectionHandled", err => {
console.log(err);
});

client.on("messageCreate", mm => {
    if(mm.content == "po7"){
        mm.delete();
        let embed = new MessageEmbed()
        .setTitle('هنا عنوان')
        .setDescription(`هنا وصف`)
        .setFooter(mm.guild.name, mm.guild.iconURL())
    .setTimestamp();
        let btn = new MessageActionRow()
        .addComponents(
new MessageSelectMenu()
    .setCustomId('opene')
    .setPlaceholder('منيو شراء مزادات')
    .setMaxValues(1)
    .setMinValues(1)
    .addOptions({
  label: 'شراء مزاد',
  description: 'لعرض سلعتك في الكزاد يرجى فتح تذكرة',
  value: 'openn',
  selected: false
},       
{
  label: 'رجوع',
  description: 'للرجوع الى الاختيار مرة اخرى',
  value: 'rest',
  emoji : `♻`,
  selected: false
})

        )
        mm.channel.send({embeds: [embed], components: [btn]})
    }
})

//####################################################//
//####################################################//
