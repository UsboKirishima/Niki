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
exports.help = exports.run = void 0;
const emojis_json_1 = require("../../utils/emojis.json");
const db = __importStar(require("quick.db"));
async function run(client, message, args) {
    var _a;
    if (message.author.id !== '848463685374443530')
        return message.channel.send(`You can\'t use this command -_-!'`);
    message.channel.send(`${emojis_json_1.alarm} Emergency mode is now active!`);
    let emmode = db.get('emergencymode');
    if (emmode == true)
        return db.set('emergencymod', false), message.channel.send('Emergency mode is now disabled');
    else {
        (_a = client.user) === null || _a === void 0 ? void 0 : _a.setActivity('Connecting...');
        db.set('emergencymod', true);
    }
}
exports.run = run;
exports.help = {
    aliases: [''],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'emergency'
};
