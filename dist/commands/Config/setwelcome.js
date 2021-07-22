"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
const emojis_json_1 = require("../../utils/emojis.json");
const db = __importStar(require("quick.db"));
async function run(client, message, args) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    if (!args.slice(1).join(" ")) {
        message.channel.send(new discord_js_1.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor('[SETWELCOME - HELP]')
            .setDescription(`
                    -ENABLE-
                    Type \`setwelcome on/off\`

                    ___________________________________________________

                    -WELCOME MESSAGE-
                    \`setwelcome message + [message]\`
                    Set welcome message.
                    
                    Here's a list of placeholders you can use;
                    {mention} - Mentions the user using @
                    {server} - The name of the current server
                    {username} - The nickname of the member that joined
                    {membercount} - The amount of members in the server

                    ___________________________________________________

                    -WELCOME CHANNEL-
                    \`setwelcome channel + [channel id/@]\`
                `));
    }
    if (args[1].toLowerCase() == 'on') {
        if (!((_a = message.member) === null || _a === void 0 ? void 0 : _a.hasPermission('MANAGE_GUILD')))
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} You can't use this command.`));
        if (db.get(`welcome.${(_b = message.guild) === null || _b === void 0 ? void 0 : _b.id}.enable`) == true)
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Welcome is already anabled.`));
        db.set(`welcome.${(_c = message.guild) === null || _c === void 0 ? void 0 : _c.id}.enable`, true);
        await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.tick} Welcome is now Enabled`));
    }
    if (args[1].toLowerCase() == 'off') {
        if (!((_d = message.member) === null || _d === void 0 ? void 0 : _d.hasPermission('MANAGE_GUILD')))
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} You can't use this command.`));
        if (db.get(`welcome.${(_e = message.guild) === null || _e === void 0 ? void 0 : _e.id}.enable`) == false)
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Welcome is already disabled.`));
        db.set(`welcome.${(_f = message.guild) === null || _f === void 0 ? void 0 : _f.id}.enable`, false);
        message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.tick} Welcome is now disabled.`));
        db.delete(`welcome.${(_g = message.guild) === null || _g === void 0 ? void 0 : _g.id}.message`);
        db.delete(`welcome.${(_h = message.guild) === null || _h === void 0 ? void 0 : _h.id}.channel`);
    }
    if (args[1].toLowerCase() == 'message') {
        if (!((_j = message.member) === null || _j === void 0 ? void 0 : _j.hasPermission('MANAGE_GUILD')))
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} You can't use this command.`));
        if (db.get(`welcome.${(_k = message.guild) === null || _k === void 0 ? void 0 : _k.id}.enable`) == false)
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Enable Welcome with \`setwelcome enable\` first.`));
        if (!args.slice(2).join(" "))
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Please specify the message. \`setwelcome message + [MESSAGE]\``));
        db.push(`welcome.${(_l = message.guild) === null || _l === void 0 ? void 0 : _l.id}.message`, args.slice(2).join(" "));
        await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.tick} I have just set message.`));
    }
    if (args[1].toLowerCase() == 'channel') {
        if (!((_m = message.member) === null || _m === void 0 ? void 0 : _m.hasPermission('MANAGE_GUILD')))
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} You can't use this command.`));
        if (!args[2])
            return message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Please provide a channel first. \`setwelcome channel + [channel id/@]\``));
        let chn;
        chn = (_o = message.mentions.channels.first()) === null || _o === void 0 ? void 0 : _o.id;
        if (!chn) {
            chn = args[2];
        }
        db.set(`welcome.${(_p = message.guild) === null || _p === void 0 ? void 0 : _p.id}.channel`, chn);
        await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.tick} I have just set the Welcome channel (<#${chn}>).`));
    }
}
exports.run = run;
exports.help = {
    aliases: ['welcome'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'setwelcome'
};
exports.memberPerms = [];
exports.permissions = [];
