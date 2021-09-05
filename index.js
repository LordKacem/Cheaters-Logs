const express = require("express")
const app =  express();
const port = 3000


app.get('/', (req, res) => res.send("Hello World!")
);

app.listen(port, () =>
console.log(`My app is listening at http://localhost:${port}`)
)



const Discord = require('discord.js');

const { Permissions } = require('discord.js');

const client = new Discord.Client ();

const { Client, MessageAttachment, MessageEmbed } = require('discord.js');


const config = require('./config.json');

var servers = {};




client.commands= new Discord.Collection();
   


   let NAME = config.name
   let FOOTER = config.footer_image



client.on('ready',() =>{




   console.log('This bot is online!');

   client.user.setActivity(`Monitoring Clan Trophies!`, {type: "WATCHING"});
   console.log("Powered by K4c3m")





})



const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'play.jartexnetwork.com',
  username: 'CCBot',
  version: "1.8.9"

})


bot.on('kicked', console.log)
bot.on('error', console.log)


   
bot.once('spawn', () => {

setTimeout(function(){ 
   bot.chat(`/l ${process.env.password}`)
}, 1000);


})



client.on("guildMemberUpdate", (oldMember, newMember) => {

  console.log("Member Update detected")

  if (oldMember.roles.cache.size < newMember.roles.cache.size) { 

      console.log("Role Addition Detected")

let onlineRole_ID = "883776662154649631"   


if((!oldMember.roles.cache.has(onlineRole_ID)) && (newMember.roles.cache.has(onlineRole_ID))) {

  console.log("Detected: Online role added")

  let ign = newMember.nickname.replace(" | Offline", "").replace(" | Online", "");


setTimeout(function(){ 
    bot.chat(`./c invite ${ign}`)

}, 2000);


newMember.send("You have been invited to the clan!")


}

  }


  if (oldMember.roles.cache.size > newMember.roles.cache.size) {

    console.log("Role Removal Detected!")


let onlineRole_ID = "883776662154649631"   


if((oldMember.roles.cache.has(onlineRole_ID)) && (!newMember.roles.cache.has(onlineRole_ID))) {

console.log("Detected: Online role removed")

  let ign = newMember.nickname.replace(" | Offline", "").replace(" | Online", "");


setTimeout(function(){ 
    bot.chat(`./c kick ${ign} Offline`)

}, 2000);


newMember.send("You have been removed from the clan as you went offline!")


}

  }


});









bot.on('chat', (username, message) => {



  if (message.includes("The clan has won a total of")) { console.log("Detected: Earned trophies \n Message: " + message)

  let wMessage = message.replace("Clans |", "")

  let logsChannel = client.channels.cache.get('883769595884879933');
  
  let wEmbed = new MessageEmbed();
      wEmbed.setDescription(`<:CC_Yes:801113173586608169> ${wMessage}`)
      wEmbed.setColor("GREEN")

  return logsChannel.send(wEmbed)


  } else {

    if (message.includes("The clan has lost a total of")) { console.log("Detected: Lost trophies \n Message: " + message)

  let wMessage = message.replace("Clans |", "")


  let logsChannel = client.channels.cache.get('883769595884879933');
    
  let lEmbed = new MessageEmbed();
      lEmbed.setDescription(`<:CC_No:801112994838216724> ${wMessage}`)
      lEmbed.setColor("#ff0000")

  return logsChannel.send(lEmbed)

  }
  }

})








    client.login(process.env.BOT_TOKEN);