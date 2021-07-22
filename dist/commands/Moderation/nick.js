"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
const emojis_json_1 = require("../../utils/emojis.json");
async function run(client, message, args) {
    var _a, _b, _c, _d, _e;
    if (!((_b = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.me) === null || _b === void 0 ? void 0 : _b.hasPermission('CHANGE_NICKNAME')))
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} I can't use this command.\n\nMissing Permissions CHANGE_NICKNAME.`));
    if (!((_c = message.member) === null || _c === void 0 ? void 0 : _c.hasPermission('MANAGE_NICKNAMES')))
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} You can't use this commands\n\nPermissions: MANAGE_NICKNAMES`));
    let nick = args.slice(1).join(" ");
    (_e = (_d = message.guild) === null || _d === void 0 ? void 0 : _d.me) === null || _e === void 0 ? void 0 : _e.setNickname(nick);
    message.delete();
    message.channel.send('Hey its me ur ' + nick);
}
exports.run = run;
exports.help = {
    aliases: ['nickname'],
    category: 'Miscellaneous',
    desc: 'Displays the ping of the bot.',
    dm: true,
    togglable: false,
    usage: 'nick'
};
exports.memberPerms = [];
exports.permissions = [];
