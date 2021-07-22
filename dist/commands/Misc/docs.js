"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
const node_fetch_1 = __importDefault(require("node-fetch"));
async function run(client, message, args) {
    const query = args.slice(1).join(' ');
    if (!query)
        return message.reply('Please Provide A Query To Search For.'); // If No Query Is Searched
    const url = 'https://djsdocs.sorta.moe/v2/embed?src=stable&q=' + query; // From Here BOT Will Send Docs. // <v2> Can Be Chnaged To <v1> // <stable> Can Be Changed To <master>
    let response;
    try {
        response = await node_fetch_1.default(url).then(res => res.json());
    }
    catch (e) {
        return message.reply('An Error Occured, Try Again Later.');
    }
    const pkg = response;
    const embed = new discord_js_1.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/emojis/586438523796848640.png?v=1') // We Will Keep Discord.JS Thumbnail // You Can Keep Any Thumbnail
        .setAuthor(pkg.author.name, pkg.author.icon_url)
        .setDescription(pkg.description)
        .setTimestamp();
    // .setFooter(`Requested By`)
    // If The Docs Searched Has Fields
    if (pkg.fields) {
        embed.addFields(pkg.fields);
    }
    // If The Docs Searched Has Title
    if (pkg.title) {
        embed.setTitle(pkg.title);
    }
    message.channel.send(embed);
}
exports.run = run;
exports.help = {
    aliases: ['doc'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'docs',
};
exports.memberPerms = [];
exports.permissions = [];
