"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
//import translate from '@k3rn31p4nic/google-translate-api'
async function run(client, message, args) {
    /*const langs = ["afrikaans", "albanian", "amharic", "arabic", "armenian", "azerbaijani", "bangla", "basque", "belarusian", "bengali", "bosnian", "bulgarian", "burmese", "catalan", "cebuano", "chichewa", "corsican", "croatian", "czech", "danish", "dutch", "english", "esperanto", "estonian", "filipino", "finnish", "french", "frisian", "galician", "georgian", "german", "greek", "gujarati", "haitian creole", "hausa", "hawaiian", "hebrew", "hindi", "hmong", "hungarian", "icelandic", "igbo", "indonesian", "irish", "italian", "japanese", "javanese", "kannada", "kazakh", "khmer", "korean", "kurdish (kurmanji)", "kyrgyz", "lao", "latin", "latvian", "lithuanian", "luxembourgish", "macedonian", "malagasy", "malay", "malayalam", "maltese", "maori", "marathi", "mongolian", "myanmar (burmese)", "nepali", "norwegian", "nyanja", "pashto", "persian", "polish", "portugese", "punjabi", "romanian", "russian", "samoan", "scottish gaelic", "serbian", "sesotho", "shona", "sindhi", "sinhala", "slovak", "slovenian", "somali", "spanish", "sundanese", "swahili", "swedish", "tajik", "tamil", "telugu", "thai", "turkish", "ukrainian", "urdu", "uzbek", "vietnamese", "welsh", "xhosa", "yiddish", "yoruba", "zulu"];
    
    
    
    if(!args[1]){
       message.channel.send(new MessageEmbed().setDescription(`${error} Missing Language`))
    }
    
    if(!args[2]){
        message.channel.send(new MessageEmbed().setDescription(`${error} Missing Content`))
    }
    
    // Gets different args
    const language = args[1].toLowerCase();
    const toTranslate = args.slice(2).join(" ");
    
    if(!langs.includes(language)){
        return message.channel.send(new MessageEmbed().setDescription(`${error} Invalid Language`))
    }
    
    const translated = await translate(toTranslate, { to: language });
    
    const resEmbed = new MessageEmbed()
        .setAuthor("[TRANSLATOR]", client.user?.displayAvatarURL())
        .addField(translated.from.language.iso, "```"+toTranslate+"```")
        .addField(language, "```"+translated.text+"```")
        .setColor('RANDOM')
    
    return message.channel.send(resEmbed)*/
}
exports.run = run;
exports.help = {
    aliases: ['translator', 'translater'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'translate',
};
exports.memberPerms = [];
exports.permissions = [];
