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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    if (!((_b = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.me) === null || _b === void 0 ? void 0 : _b.hasPermission('MANAGE_CHANNELS')))
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} I can't use this commands, Please give me MANAGE_CHANNELS permission.`));
    if (!args.slice(1).join(" ")) {
        let help = String.raw `
**COUNTER**

Count members and bots

________________________________________________

*- All members*

**counter + [allmembers] + [channel id/@]**

________________________________________________

*- Members*

**counter + [members] + [channel id/@]**

________________________________________________

*- Bots*

**counter + [bots] + [channel id/@]**

________________________________________________
`;
        message.channel.send(new discord_js_1.MessageEmbed().setAuthor(message.guild.name).setDescription(help));
    }
    if (args[1] == 'allmembers') {
        if (!((_c = message.member) === null || _c === void 0 ? void 0 : _c.hasPermission('MANAGE_CHANNELS')))
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} You can't use this commands (Permissions: MANAGE_CHANNELS)`));
        if (!args[2])
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Please specify a channel first.\n\n\`counter + [allmembers] + [CHANNEL id/@]\``));
        let ch;
        ch = (_d = message.mentions.channels.first()) === null || _d === void 0 ? void 0 : _d.id;
        if (!message.mentions.channels.first()) {
            ch = (_f = (_e = message.guild) === null || _e === void 0 ? void 0 : _e.channels.cache.get(args[2])) === null || _f === void 0 ? void 0 : _f.id;
        }
        if (!ch)
            return await message.channel.send(`${emojis_json_1.error} Invalid channel`);
        db.set(`counter.${(_g = message.guild) === null || _g === void 0 ? void 0 : _g.id}.amembers`, ch);
        message.channel.send(`${emojis_json_1.tick} The allmembers counter has been set to <#${ch}>`);
    }
    if (args[1] == 'members') {
        if (!((_h = message.member) === null || _h === void 0 ? void 0 : _h.hasPermission('MANAGE_CHANNELS')))
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} You can't use this commands (Permissions: MANAGE_CHANNELS)`));
        if (!args[2])
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Please specify a channel first.\n\n\`counter + [members] + [CHANNEL id/@]\``));
        let mc;
        mc = (_j = message.mentions.channels.first()) === null || _j === void 0 ? void 0 : _j.id;
        if (!message.mentions.channels.first()) {
            mc = (_l = (_k = message.guild) === null || _k === void 0 ? void 0 : _k.channels.cache.get(args[2])) === null || _l === void 0 ? void 0 : _l.id;
        }
        if (!mc)
            return await message.channel.send(`${emojis_json_1.error} Invalid channel`);
        db.set(`counter.${(_m = message.guild) === null || _m === void 0 ? void 0 : _m.id}.members`, mc);
        message.channel.send(`${emojis_json_1.tick} The members counter has been set to <#${mc}>`);
    }
    if (args[1] == 'bots') {
        if (!((_o = message.member) === null || _o === void 0 ? void 0 : _o.hasPermission('MANAGE_CHANNELS')))
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} You can't use this commands (Permissions: MANAGE_CHANNELS)`));
        if (!args[2])
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Please specify a channel first.\n\n\`counter + [bots] + [CHANNEL id/@]\``));
        let bc;
        bc = (_p = message.mentions.channels.first()) === null || _p === void 0 ? void 0 : _p.id;
        if (!message.mentions.channels.first()) {
            bc = (_r = (_q = message.guild) === null || _q === void 0 ? void 0 : _q.channels.cache.get(args[2])) === null || _r === void 0 ? void 0 : _r.id;
        }
        if (!bc)
            return await message.channel.send(`${emojis_json_1.error} Invalid channel`);
        db.set(`counter.${(_s = message.guild) === null || _s === void 0 ? void 0 : _s.id}.bots`, bc);
        message.channel.send(`${emojis_json_1.tick} The bots counter has been set to <#${bc}>`);
    }
}
exports.run = run;
exports.help = {
    aliases: [''],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'counter',
};
exports.memberPerms = [];
exports.permissions = [];
