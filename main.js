const { config } = require("dotenv");
const fs = require("fs");
const { Client } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const beautify = require("beautify");
const { join } = require('path');
const { prefix, token, mongoURI } = require('./config.json');
require('discord-reply'); //⚠️ IMPORTANT: put this before your discord.Client()
const client = new Discord.Client();
const mongoose = require('mongoose');
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.event = new Discord.Collection();

client.categories = fs.readdirSync("./cmd/");

require('./util/loadEvents')(client);


//Loading Handlers
["command"].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() =>{
    console.log('Connected to the database!');
}).catch((err) => {
    console.log(err);
});



// require the file
const blacklist = require('./models/blacklist')


// replace the files accordingly
const cooldowns = new Discord.Collection();

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.args && !args.length) {
			let reply = `Ты не правильно написал команду, ${message.author}!`;
		
				if (command.usage) {
					reply += `\nПравильное написание команды ${command.name}: \`${prefix}${command.name} ${command.usage}\``;
				}
		
				return message.channel.send(reply);
			}


			if (!cooldowns.has(command.name)) {
				cooldowns.set(command.name, new Discord.Collection());
			}
			
			if (!message.content.startsWith(prefix)) return;
			blacklist.findOne({ id : message.author.id }, async(err, data) => {
				if(err) throw err;
				if(!data) {
					if (!message.guild) return;
					if (!message.member) message.member = await message.guild.fetchMember(message);
					const args = message.content.slice(prefix.length).trim().split(/ +/g);
					const cmd = args.shift().toLowerCase();
					if (cmd.length == 0) return;
					let command = client.commands.get(cmd)
					if (!command) command = client.commands.get(client.aliases.get(cmd));
				} else {
					message.channel.send('You are blacklisted!')
				}
			})

			const now = Date.now();
			const timestamps = cooldowns.get(command.name);
			const cooldownAmount = (command.cooldown || 3) * 1000;
			
			if (timestamps.has(message.author.id)) {
				if (!cooldowns.has(command.name)) {
					cooldowns.set(command.name, new Discord.Collection());
				}
				
				const now = Date.now();
				const timestamps = cooldowns.get(command.name);
				const cooldownAmount = (command.cooldown || 3) * 1000;
				
				if (timestamps.has(message.author.id)) {
					if (timestamps.has(message.author.id)) {
						const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
					
						if (now < expirationTime) {
							const timeLeft = (expirationTime - now) / 1000;
							return message.reply(`пожалуйста подождите ${timeLeft.toFixed(1)} секунд что бы использовать команду \`${command.name}\` `);
						}

						timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

					}
				}
			}

			try {
				command.execute(message, args, client);    } catch (error) {        console.error(error);
			  }
			  });

client.login(token);