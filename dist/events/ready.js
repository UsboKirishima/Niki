"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const express_1 = __importDefault(require("express"));
async function run(client) {
    console.log(`Successfully logged in as ${client.user.tag} (${client.user.id}).`);
    for (const emoji in client.config.emojis) {
        if (Object.prototype.hasOwnProperty.call(client.config.emojis, emoji)) {
            client.emotes.set(emoji, client.emojis.cache.get(client.config.emojis[emoji]));
        }
    }
    const nodes = [{ id: '1', host: 'localhost', port: 2333, password: process.env.LAVALINK_PASS }];
    const details = {
        guilds: client.guilds.cache.size,
        users: client.users.cache.size,
        channels: client.channels.cache.size
    };
    //website
    const app = express_1.default();
    const port = 3000 || 3001;
    app.get("/", (req, res) => {
        res.status(200).send(details);
    });
    app.get("/info", (req, res) => {
        res.status(200).send(details);
    });
    app.listen(port);
}
exports.run = run;
