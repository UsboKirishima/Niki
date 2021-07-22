"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
const anime_json_1 = __importDefault(require("../../utils/anime.json"));
async function run(client, message, args) {
    const mathRandom = (number) => ~~(Math.random() * number);
    let gg = anime_json_1.default[mathRandom(anime_json_1.default.length)];
    message.channel.send(new discord_js_1.MessageEmbed().setAuthor(`[ANIME] ${message.author.tag}`).setImage(gg).setColor('RANDOM'));
}
exports.run = run;
exports.help = {
    aliases: ['cartoon', 'sadanime', 'gifanime', 'randomanime'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'anime',
};
exports.memberPerms = [];
exports.permissions = [];
