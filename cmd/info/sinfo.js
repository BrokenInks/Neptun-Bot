const { Client } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
    name: 'server-info',
    aliases: ["server", "si"],
    execute(message, args, client) {
        const region = {
            europe: "Europa :flag_eu:",
            brazil: "Brasil :flag_br: ",
            hongkong: "Hong Kong :flag_hk:",
            japan: "Japón :flag_jp:",
            russia: "Rusia :flag_ru:",
            singapore: "Singapur :flag_sg:",
            southafrica: "Sudáfrica :flag_za:",
            sydney: "Sydney :flag_au:",
            "us-central": "Central US :flag_us:",
            "us-east": "Este US :flag_us:",
            "us-south": "Sur US :flag_us:",
            "us-west": "Oeste US :flag_us:",
            "vip-us-east": "VIP US Este :flag_us:",
            "eu-central": "Europa Central :flag_eu:",
            "eu-west": "Europa Oeste :flag_eu:",
            london: "London :flag_gb:",
            amsterdam: "Amsterdam :flag_nl:",
            india: "India :flag_in:"
        };
        const verif = {
            NONE: "Отсутствует",
            LOW: "Низкий",
            MEDIUM: "Средний",
            HIGH: "Высокий",
            VERY_HIGH: "Самый высокий"
        };
        const server_date = message.guild.createdAt.toDateString();
        const embed = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setColor("2f3136")
            .setAuthor(`Информация о сервере ${message.guild.name}`)
            .addFields(
                { name: "ID", value: message.guild.id },
                { name: "Регион", value: region[message.guild.region] },
                { name: "Верефикация", value: verif[message.guild.verificationLevel] },
                { name: "Владелец:", value: `<@${message.guild.ownerID}>`},
                { name: "Участников", value: message.guild.memberCount },
                { name: "Ботов:", value: message.guild.members.cache.filter(m => m.user.bot).size },
                { name: "Дата создания", value: server_date},
                { name: "Ролей", value: message.guild.roles.cache.size},
                { name: "Эмоджи", value: message.guild.emojis.cache.size});
        message.channel.send(embed);
        message.delete();
    }
};