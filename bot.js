const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const bot = new  Discord.Client({disableEveryonekey: true});
const prefix = ""
const token = process.env.token
const guildID = "481657489901879306"


bot.on("ready", async () => {
	console.log(`Ready! \nBot name: ${bot.user.username}`);
	bot.user.setActivity(`support || Ready`);
	try {
		let link = await bot.generateInvite(["ADMINISTRATOR","BAN_MEMBERS","KICK_MEMBERS"]);
		console.log(`Invite Link: \n` + link);
	} catch(e) {
		console.log(e.stack);
	}

});

//bot.on("guildMemberAdd", function(member) { 
  //member.guild.channels.find("name", "join").send( "Welcome to Gamers Paradise! If you have any questions please ask fire. Currently looking for staff :) " + member.toString()+ " ! :tada:" );

//});

bot.on("message", async message => {
  if(message.author.bot) return; 

});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//bot.on("guildMemberAdd", function(member) { 
  //member.guild.channels.find("name", "join").send( "Welcome to Modding Service " + member.toString()+ " ! :tada:" );
	
	//member.addRole(member.guild.roles.find("name", "casual")); //Whenever a member joins, the bot gives "Casual" rank.
//});	


bot.on('message', message => {
  const args = message.content.split(' ').slice(1);
     // This is for all messages sent inside of the bots DM's

     /*if (message.content.startsWith(prefix + 'add')) { // msg.content is the message that the user sent. and startsWith checks the first word inside of that string. 
      const channel = bot.channels.get('481696502998368256');
          if(message.author.id == '472503796623474698','385947970895609856', '336974825828646924') {          
            if(!args[0] && !args[1] && !args[2]) return message.channel.send('**Input these in the following order**: ( !add 1 2 3 )\n1 = Game \n2 = Username/Email\n3 = Password'); // Check if the user provides a username and password
          channel.send(`Game: ${args[0]}, Username/Email: ${args[1]}, Password : ${args[2]}`); // Send the account info the the channel defined above.
          let embedz = new Discord.RichEmbed()
            .setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16))
            .setDescription(`🎮 **Game:** ${args[0]}\n :e_mail: **Email:** ${args[1]}\n :key: **Password:** ${args[2]}`)
            .setFooter("Submitted by : " + message.author.tag)
              channel.send(embedz)
            return message.channel.send('Thank you for your account !'); // Reply to the supplier with a confirmation message
        } else {return message.channel.send(" :no_entry_sign: You are **not authorized** to use this command ! :no_entry_sign:  ")};
      }*/

          // vvvv generator bot vvvv

      /*if(message.content.startsWith(prefix +'gen')) {
        const channel = bot.channels.get('481696502998368256');   
        let embedz = new Discord.RichEmbed()
          .setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16))
          //.setDescription (`Game: ${args[0]}, Username/Email: ${args[1]}, Password : ${args[2]}`)
          .setDescription(`🎮 **Game:** Fortnite \n :e_mail: **Email:** \n :key: **Password:** `)
          .setFooter("Submitted by : " + message.author.tag)
            channel.send(embedz)
          return message.channel.send("Check your private messages : " + message.author.tag); // Reply to the supplier with a confirmation message
      } //else {return message.channel.send(" :no_entry_sign: You are **not authorized** to use this command ! :no_entry_sign:  ")};*/

          // vvvv ticket bot vvvv
      
          //member.addRole(member.guild.roles.find("name", "casual"));

      /*if(message.content.startsWith(prefix +'verify')) {
        const channel = bot.channels.get('481957454125596703');
        let embedz = new Discord.RichEmbed()
        .setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16))
        bot.on("guildMemberAdd", function(member) { 
        member.guild.channels.find("name", "join")
        member.addRole(member.guild.roles.find("name", "verified"))
        channel.send(embedz)
        return message.channel.send('Thank you for verifying your discord account! :tada:');
        message.react("✅");
      }*/

      if(message.content.startsWith(prefix +'support')) {

        if (message.channel.id === '482085378400976896') { //check if message is sent in support channel
          var moment = require('moment'); moment().format(); // Where we call moment you retard  
              const channel = bot.channels.get('482085446310952971');   
               let embedz = new Discord.RichEmbed()  
               //.setDescription(`Please add a reason`)
                .setTitle(moment().calendar())  // Date & Time when user requests
                    .setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16))
                     .setDescription(`Description:  ${args[0]}`)
                       .setFooter("Submitted by : " + message.author.tag)
                          channel.send(embedz)
                            message.react("✅");
        }

        if (message.channel.id !== '482085378400976896') { //specific channel to send
          let embedz = new Discord.RichEmbed()
          .setColor('0xff0000')
          .setDescription('❌ This command only works in #support! ❌')
            message.channel.send(embedz)
              //message.react("❌");
        }


        /*client.on('message', message => {
          if(message.content.startsWith(prefix +'purge')) { 
            message.delete(1000);
            message.channel.send(message.content.slice(5, message.content.length));
          }
        });*/
      

        /*if (message.channel.id !== '482085378400976896') { //specific channel to send
              message.author.send("Who");
          
        }*/

        /*if (message.channel.id == '482085378400976896') { //specific channel to send
          let embedz = new Discord.RichEmbed()
          .setColor('#4c4cff')
          .setDescription('Please add a description! ')
            message.channel.send(embedz)
        }*/
      }
        //if(recievemessage.author.id == '472503796623474698','385947970895609856', '336974825828646924')

      /*if(message.content.startsWith(prefix +'purchase')) {
        const channel = bot.channels.get('481019551878873091');   
        let embedz = new Discord.RichEmbed()
          .setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16))
          //.setDescription (`Game: ${args[0]}, Username/Email: ${args[1]}, Password : ${args[2]}`)
          .setDescription(`Purchase somewhere`)
          .setFooter("Submitted by : " + message.author.tag)
            channel.send(embedz)
            message.react("✅");
          //return message.channel.send("Check your private messages : " + message.author.tag); // Reply to the supplier with a confirmation message
      }*/

  if (message.content === prefix + 'avatar') {
    message.reply(message.author.avatarURL);
  }

  if (message.content.startsWith(`${prefix}+ping`)) {
      let embedv2 = new Discord.RichEmbed()
          .setDescription(`**${message.author.tag}** | :ping_pong: Ping : ${bot.ping}ms`)
    message.channel.send(embedv2)
      .catch(console.error);
  }

  /*if (message.content.startsWith(prefix + 'gen'))
    const channel = bot.channels.get('481696502998368256');
    if(message.author.id == '472503796623474698','385947970895609856', '336974825828646924') {
      channel.send(`Game: ${args[0]}, Username/Email: ${args[1]}, Password : ${args[2]}`); // Send the account info the the channel defined above.
      let embedz = new Discord.RichEmbed()
      .setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16))
      .setDescription(`🎮 **Game:** ${args[0]}\n :e_mail: **Email:** ${args[1]}\n :key: **Password:** ${args[2]}`)
      .setFooter("Submitted by : " + message.author.tag)
    }*/

    
  /*if (message.content === prefix + 'penis') {
    message.channel.send(message.author.toString() + "'s" + " dick " + "is " + getRandomInt(18) +" inches");
  }*/

  /*if (message.content === prefix + 'servercount') {
    message.channel.send(`Server counted: **${bot.guilds.size} **`)
    message.react("✅");
  }*/

  /*if (message.content === prefix + 'invites') {
    message.channel.send(`invites: **${Discord.guilds.get(guildID).generateInvite.link}  **`)
  }*/
  

  /*if (message.content === prefix + 'membercount') {
    message.channel.send(`Members: **${Discord.guilds.get(guildID).members.size()} **`)
    message.react("✅");
  }*/
  

  /*if (message.content === prefix + 'twitch') {
   message.channel.send('https://www.twitch.tv/yvngsmok');
  }*/

  /*if (message.content.startsWith(prefix + '8ball')) {
      
    if (!args[1]) return message.reply("Please ask a full question!");
    let replies = ["**Yes, Certainly :8ball:**", "**No, Never :8ball:**", "**Maybe :8ball:**", "Yeah, Obviously Nigga :8ball:"]
    let result = Math.floor((Math.random() * replies.length));

    let question = args.slice().join(" ");

    let embedz = new Discord.RichEmbed()
        .setColor("#D3D3D3")
        .setDescription(replies[result])
    message.channel.send(embedz)
    };
    module.exports.help = {
      name: "8ball"
    }*/

  if (message.content === prefix + 'help') {
    let embedv3 = new Discord.RichEmbed()
    .setTitle("Support Bot")
    .setAuthor("by fire#9999 & veno#9548", "https://imgur.com/a/zd6GzI9")
    /*
     * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
     */
    .setColor(0x00AE86)
    .setDescription("If needed assistance please type ***support** to request one of the support team members ")
    //.setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
    //.setImage("http://i.imgur.com/yVpymuV.png")
    //.setThumbnail("http://i.imgur.com/p2qNFag.png")
    /*
     * Takes a Date object, defaults to current date.
     */
    .setTimestamp()
    //.setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
    //.addField("If needed help type !ticket")
      //"If needed help type !ticket")
    /*
     * Inline fields may not display as inline if the thumbnail and/or image is too big.
     */
    //.addField("Inline Field", "They can also be inline.", true)
    /*
     * Blank field, useful to create some space.
     */
    //.addBlankField(true)
    //.addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
    message.channel.send(embedv3)
    message.react("✅");
  }

}); 

bot.login(botSettings.token);