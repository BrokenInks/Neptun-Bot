const Discord = require('discord.js')
const client = new Discord.Client();
const { version } = require('../../package.json')
const { version: discordjsVersion } = require('discord.js')
const ms = require('pretty-ms');
const { author } = require('../../package.json');
module.exports = {
    name: 'bot',
    execute(message, args, client) {
    let members = client.guilds.cache.members
    let adm = client.users.cache.get("852626327310696538") //Укажите айди
    let user = message.author;
  message.channel.send(
      new Discord.MessageEmbed()
      .setColor('00fffc')
      .setThumbnail(user.displayAvatarURL({dynamic: true}))
      .setTitle(`Версия бота: ${version}`)
.setDescription(`Автор бота: ${adm.tag}`)
      .addField('Бот в сети:', `${ms(client.uptime)}`,true)
      .addField('Нагрузка на бота:', `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap`,true)
      .addField('Пинг:', `${client.ws.ping} ms`,true)
      .addField('Всего гильдий:', `${client.guilds.cache.size}`,true)
      .addField('Всего юзеров:', `${client.users.cache.size}`,true)
      .addField('Всего команд:', `${client.commands.size}`,true)
      .addField('Node js:', `${process.version}`,true)
      .addField('Библиотека Djs', `${discordjsVersion}`,true)
  )
  }}