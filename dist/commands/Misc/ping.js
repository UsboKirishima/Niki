"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
async function run(client, message, args) {
    const msg = await message.channel.send(`Pong! :heartbeat: \`${Math.round(client.ws.ping * 10) / 10}ms\``);
    msg.edit(`${msg.content} :stopwatch: \`${msg.createdTimestamp - message.createdTimestamp}ms\``);
}
exports.run = run;
exports.help = {
    aliases: ['pong', 'p'],
    category: 'Miscellaneous',
    desc: 'Displays the ping of the bot.',
    dm: true,
    togglable: false,
    usage: 'ping'
};
exports.memberPerms = [];
exports.permissions = [];
