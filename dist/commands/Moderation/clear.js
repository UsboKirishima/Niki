"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
const emojis_json_1 = require("../../utils/emojis.json");
async function run(client, message, args) {
    var _a, _b, _c;
    if (!((_b = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.me) === null || _b === void 0 ? void 0 : _b.hasPermission('MANAGE_MESSAGES')))
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} I can't use this command.\n\nPermission required: MANAGE_MESSAGES`));
    if (!((_c = message.member) === null || _c === void 0 ? void 0 : _c.hasPermission('MANAGE_MESSAGES')))
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} You can't use this command.\n\nPermission required: MANAGE_MESSAGES`));
    if (!args[1])
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(emojis_json_1.error + ' Invalid Number'));
    let g = args[1];
    let gg = message.channel;
    if (isNaN(g))
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(emojis_json_1.error + ' Invalid Number'));
    if (g == 0 || g == 1)
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Enter values higher than 1`));
    try {
        message.delete({ timeout: 1000 });
        if (g > 100) {
            await gg.bulkDelete(100, true);
            await gg.bulkDelete(gg - 100, true);
        }
        else {
            await gg.bulkDelete(g, true);
        }
    }
    catch (err) {
    }
}
exports.run = run;
exports.help = {
    aliases: ['clean', 'purge'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'clear',
};
exports.memberPerms = [];
exports.permissions = [];
