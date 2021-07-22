import type ReknownClient from '../structures/client';
import { Client, MessageEmbed } from 'discord.js'

export async function run (client: ReknownClient, err: Error) {
  console.log(err)
  const dmme: any = client.users.cache.get('848463685374443530')
  let embed = new MessageEmbed()
  .setDescription("```ts\n" + err + "```")

  dmme.send(embed)

}
