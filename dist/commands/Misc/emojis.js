"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
async function run(client, message, args) {
    var _a, _b;
    const emojis = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.emojis.cache.map((e) => {
        return `${e} - \`:${e.name}:\``;
    });
    let ad = message.guild;
    message.channel.send(new discord_js_1.MessageEmbed().setAuthor('[EMOJIS] ' + ((_b = message.guild) === null || _b === void 0 ? void 0 : _b.name), ad.iconURL({ dynamic: true })).setDescription(emojis).setColor('RANDOM'));
}
exports.run = run;
exports.help = {
    aliases: ['listemojis', 'emojislist', 'emojilist', 'listemoji'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'emojis',
};
