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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config = __importStar(require("../config.json"));
const commandhandler_1 = __importDefault(require("./commandhandler"));
const functions_1 = require("./functions");
const discord_js_1 = require("discord.js");
class ReknownClient extends discord_js_1.Client {
    constructor() {
        super(...arguments);
        this.commands = new commandhandler_1.default();
        this.config = config;
        this.emotes = new discord_js_1.Collection();
        this.escMD = discord_js_1.Util.escapeMarkdown;
        this.escInline = (str) => str.replace(/`/g, '\u200B`\u200B');
        this.events = new discord_js_1.Collection();
        this.functions = new functions_1.Functions();
    }
}
exports.default = ReknownClient;
