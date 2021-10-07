const { Client } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Показ всех команд бота",
  async execute(message, args, client)  {


      const help = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle('Prefix - `^`')
      .setAuthor('Commands List', message.author.displayAvatarURL())

      .addFields(
        { name: 'Informations', value: '`stats` `help` `invite` `ping` `user`, `server`', inline: false },
        { name: 'Moderation', value: '`ban` `clear` `kick` `say` `unban`',  inline: false },
        { name: 'Other', value: '`about` | `report`', inline: false },)
      
      message.channel.send(help)
    }
  }
