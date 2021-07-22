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
const docs = __importStar(require("ghom-djs-docs"));
async function run(client, message, args) {
    let what = args.slice(1).join(" ");
    if (!what)
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Specify a djs functions.`));
    const someProp = await docs.search("stable", what);
    let embed = new discord_js_1.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('[DJS SRC]')
        .addField('Input Search', "```" + what + "```")
        .addField('Type Search', "```" + docs.flatTypeDescription(someProp.type) + "```")
        .addField('Docs Link', `**[${docs.buildURL('stable', someProp)}](${docs.buildURL('stable', someProp)})**`);
    message.channel.send(embed);
}
exports.run = run;
exports.help = {
    aliases: [''],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'djs',
};
exports.memberPerms = [];
exports.permissions = [];
