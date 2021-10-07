const ms = require("pretty-ms")
const { Client } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
    name: 'stats',
    execute(message, args, client) {
  let ping;
  if (client.ws.ping<300) ping = `:green_circle:`
  else if (client.ws.ping<600) ping = `:yellow_circle:`
  else if (client.ws.ping<1400) ping = `:orange_circle:`
  else if (client.ws.ping<1700) ping = `:red_circle:`
  else if (client.ws.ping>1700) ping = `:black_circle:`
  let embed = new Discord.MessageEmbed()
  .setTitle("Статистика бота")
  .addFields(
    {name: "Основное", value: `**Пинг:** ${client.ws.ping}ms\n**Аптайм:** ${ms(client.uptime)}\n**Задержка между сообщениями:** ${Date.now() - message.createdTimestamp}ms\n**Сервера:** ${client.guilds.cache.size}\n**Юзеры:** ${client.users.cache.size}`},
    
    {name: "Хостинг", value: `**Платформа:** ${require('os').platform} ${require('os').arch}\n**Память (RSS):** ${(process.memoryUsage().rss / 1024 / 1024).toFixed(0)} MB / ${(require("os").totalmem() / 1024 / 1024).toFixed(0)} MB\n**Память (Heap):** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\n**Процессор:** ${require('os').cpus()[0].model}`},
    {name: "Другое", value: `**Статус:** ${ping}\n **Разработчик:** **BrokenInk#2206**`}
  )
  .setColor('9f5f80')
  message.channel.send(embed)
}}