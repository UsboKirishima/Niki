"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
const emojis_json_1 = require("../../utils/emojis.json");
async function run(client, msg, args) {
    var _a, _b;
    if (msg.author.id !== '848463685374443530')
        return msg.channel.send(`You can\'t use this command -_-!'`);
    msg.channel.send(emojis_json_1.loading + " Restarting...");
    (_a = msg.client.user) === null || _a === void 0 ? void 0 : _a.setStatus('dnd');
    (_b = msg.client.user) === null || _b === void 0 ? void 0 : _b.setActivity("Restarting...");
    // Logger
    // Command
    console.log("<" + msg.guild + ">[#" + msg.channel + "] RESTART | " + msg.author + msg.author.tag + " is restarting the bot...");
    setTimeout(destroyClient, 3000);
    setTimeout(restart, 5000);
    function destroyClient() {
        msg.client.destroy();
        console.log("<INFO> Restarting in 2 seconds...");
    }
    function restart() {
        console.log("<INFO> Restarting...");
        process.exit();
    }
}
exports.run = run;
exports.help = {
    aliases: ['reload'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'restart'
};
