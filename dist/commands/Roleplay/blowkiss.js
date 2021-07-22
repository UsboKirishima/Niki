"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
const emojis_json_1 = require("../../utils/emojis.json");
const blowkiss_json_1 = require("../../utils/Roleplay/blowkiss.json");
async function run(client, message, args) {
    var _a, _b, _c, _d;
    var user;
    if (!args.slice(1).join(" ")) {
        user = message.member;
    }
    else {
        user = (_a = message.mentions.members) === null || _a === void 0 ? void 0 : _a.first();
        if (!user) {
            user = ((_b = message.guild) === null || _b === void 0 ? void 0 : _b.members.cache.get(args[1])) || ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.members.cache.find(user => user.user.username.toLowerCase() == args.slice(1).join(" "))) || ((_d = message.guild) === null || _d === void 0 ? void 0 : _d.members.cache.find(user => user.user.tag.toLowerCase() == args.slice(1).join(" ")));
        }
    }
    if (!user)
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid user.`));
    const mathRandom = (number) => ~~(Math.random() * number);
    let gg = blowkiss_json_1.links[mathRandom(blowkiss_json_1.links.length)];
    message.channel.send(new discord_js_1.MessageEmbed().setImage(gg).setDescription(`**${user.user.username}** is blowing a kiss! Mwah!`).setColor('RANDOM'));
}
exports.run = run;
exports.help = {
    aliases: [''],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'blowkiss',
};
exports.memberPerms = [];
exports.permissions = [];
