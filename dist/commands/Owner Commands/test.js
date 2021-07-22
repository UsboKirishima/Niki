"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
const emojis_json_1 = require("../../utils/emojis.json");
async function run(client, message, args) {
    var _a;
    if (message.author.id !== '848463685374443530')
        return message.channel.send(`You can\'t use this command -_-!'`);
    const gg = new Date(Date.now());
    const date1 = gg.getDate();
    const date2 = gg.getMonth();
    const date3 = gg.getFullYear();
    let embed = new discord_js_1.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`[TEST]`, (_a = client.user) === null || _a === void 0 ? void 0 : _a.displayAvatarURL())
        .addField(':stopwatch: Ping', client.ws.ping + "ms", true)
        .addField(':calendar: Date', `${date1}/${date2}/${date3}`, true)
        .addField(`${emojis_json_1.developer} Developer`, 'usbo#9999', true)
        .addField('First args', args.slice(2).join(" "), true);
    message.channel.send(embed);
}
exports.run = run;
exports.help = {
    aliases: [''],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'test',
    dm: true
};
