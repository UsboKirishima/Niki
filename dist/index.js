"use strict";
/* eslint-disable @typescript-eslint/no-var-requires, global-require */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("./structures/client"));
//require("discord-buttons")(ReknownClient)
const fs_1 = require("fs");
const config_json_1 = require("./config.json");
const discord_js_1 = require("discord.js");
const db = __importStar(require("quick.db"));
const client = new client_1.default({
    disableMentions: 'everyone',
    partials: ['GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'],
    presence: {
        activity: {
            name: `${config_json_1.version}`,
            type: 'PLAYING'
        }
    }
});
const eventList = fs_1.readdirSync('./dist/events');
eventList.forEach(f => client.events.set(f.slice(0, -3), require(`./events/${f}`)));
client.events.forEach((obj, name) => client.on(name, (...args) => obj.run(client, ...args)));
process.on('unhandledRejection', console.log);
client.on('message', async (message) => {
    var _a, _b, _c, _d;
    if (message.content == `<@${(_a = client.user) === null || _a === void 0 ? void 0 : _a.id}>` || message.content == `<@!${(_b = client.user) === null || _b === void 0 ? void 0 : _b.id}>`) {
        message.channel.send(new discord_js_1.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor('Niki', (_c = client.user) === null || _c === void 0 ? void 0 : _c.displayAvatarURL({ format: 'png' }))
            .setDescription(`
Hello ${(_d = message.guild) === null || _d === void 0 ? void 0 : _d.name}!
I'm Niki, a discord bot made in Typescript - Online 24/7

My prefix is **nik**
Join in the support server [__***dsc.gg/MagicPoison***__](https://www.dsc.gg/magicpoison)

**My info**

- Owner: *usbo#9999*
- OS: *Windows Server*
- Version: *Beta*
- Libraries: *Discord.js V13, discord-akairo v8.1*
- Node: *v14.16.0*
- Yarn: *1.22.10*
- Cpu: *Intel® Core™ i5-9600K 4,90 GHz*
- Memory: *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB*
- Ping: *${client.ws.ping}ms (WS Client)*
- Uptime: *${require('ms')(client.uptime)}*
:cherry_blossom::cherry_blossom::cherry_blossom:
`));
        return;
    }
});
client.on('guildMemberAdd', member => {
    var _a, _b, _c, _d;
    let enable = db.get(`welcome.${(_a = member.guild) === null || _a === void 0 ? void 0 : _a.id}.enable`);
    let channel = db.get(`welcome.${(_b = member.guild) === null || _b === void 0 ? void 0 : _b.id}.channel`);
    let welmessage = db.get(`welcome.${(_c = member.guild) === null || _c === void 0 ? void 0 : _c.id}.message`);
    if (enable == null || enable == undefined || enable == false)
        return;
    let ChannelFind = member.guild.channels.cache.get(channel);
    if (!ChannelFind)
        return;
    let memberL = member;
    const uname = (_d = member.user) === null || _d === void 0 ? void 0 : _d.username;
    const count = member.guild.memberCount;
    const mseg = `${welmessage}`
        .replace(/{mention}/g, memberL)
        .replace(/{server}/g, member.guild.name)
        .replace(/{username}/g, uname)
        .replace(/{memberCount}/g, count);
    ChannelFind.send(mseg);
});
client.on('guildMemberAdd', async (member) => {
    var _a, _b;
    let enable = db.get(`ar.${(_a = member.guild) === null || _a === void 0 ? void 0 : _a.id}.enable`);
    let role = db.get(`ar.${(_b = member.guild) === null || _b === void 0 ? void 0 : _b.id}.role`);
    if (enable == false || enable == undefined || enable == null)
        return;
    if (member.user.bot)
        return;
    let roles = member.guild.roles.cache.get(`${role}`);
    if (!role)
        return;
    return await member.roles.add(roles);
});
client.on('guildMemberAdd', member => {
    let usersDB = client.users.cache.size;
    let channelsDB = client.channels.cache.size;
    let guildsDB = client.guilds.cache.size;
    db.set(`botstats.users`, usersDB);
    db.set(`botstats.channels`, channelsDB);
    db.set(`botstats.guilds`, guildsDB);
});
client.on('guildMemberRemove', member => {
    let usersDB = client.users.cache.size;
    let channelsDB = client.channels.cache.size;
    let guildsDB = client.guilds.cache.size;
    db.set(`botstats.users`, usersDB);
    db.set(`botstats.channels`, channelsDB);
    db.set(`botstats.guilds`, guildsDB);
});
//MongoDb Gay
client.login('ODU1MTc4OTczMDI4Njc5Njkw.YMutew.k38Wlyv1KCGZHsaRx1cMV-mOB-s');
//client.login('ODQ4NjE2NTA5NzY1MTg5NjQy.YLPNtg.UGPF1-5Aj_3OvHd6eAI402xIGSg');
