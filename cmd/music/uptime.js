const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error")

module.exports = {
  info: {
    name: "uptime",
    description: "uptime bot",
    usage: "",
    aliases: ["ut", "uptime"],
  },

  run: async function (client, message, args) {
        function timeFunc(ms) {
            let days = Math.floor(ms / 86400000); // 24*60*60*1000
            let daysms = ms % 86400000; // 24*60*60*1000
            let hours = Math.floor(daysms / 3600000); // 60*60*1000
            let hoursms = ms % 3600000; // 60*60*1000
            let minutes = Math.floor(hoursms / 60000); // 60*1000
            let minutesms = ms % 60000; // 60*1000
            let sec = Math.floor(minutesms / 1000);

            let str = "";
            if (days) str = str + days + "д ";
            if (hours) str = str + hours + "ч ";
            if (minutes) str = str + minutes + "м ";
            if (sec) str = str + sec + "с ";

            return str;
        }
    }
}