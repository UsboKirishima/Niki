import type ReknownClient from '../structures/client';
import { Client, MessageEmbed } from 'discord.js'
import type { Message, PartialMessage } from 'discord.js';

export async function run (client: ReknownClient, oldMessage: Message, newMessage: Message) {
    client = client
    if(!newMessage.editedAt) return;
    client.emit("message", newMessage);
}
