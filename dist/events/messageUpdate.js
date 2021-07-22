"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
async function run(client, oldMessage, newMessage) {
    client = client;
    if (!newMessage.editedAt)
        return;
    client.emit("message", newMessage);
}
exports.run = run;
