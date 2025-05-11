const axios = require("axios");
const { cmd } = require("../command");

// Command: bible
cmd({
    pattern: "bible",
    desc: "Fetch Bible verses by reference.",
    category: "fun",
    react: "?",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {
    try {
        // V¨¦rifiez si une r¨¦f¨¦rence est fournie
        if (args.length === 0) {
            return reply(`?? *Please provide a Bible reference.*\n\n? *Example:*\n.bible John 1:1`);
        }

        // Joindre les arguments pour former la r¨¦f¨¦rence
        const reference = args.join(" ");

        // Appeler l'API avec la r¨¦f¨¦rence
        const apiUrl = `https://bible-api.com/${encodeURIComponent(reference)}`;
        const response = await axios.get(apiUrl);

        // V¨¦rifiez si la r¨¦ponse contient des donn¨¦es
        if (response.status === 200 && response.data.text) {
            const { reference: ref, text, translation_name } = response.data;

            // Envoyez la r¨¦ponse format¨¦e avec des emojis
            reply(
                `? *Bible Verse Found!*\n\n` +
                `? *Reference:* ${ref}\n` +
                `? *Text:* ${text}\n\n` +
                `?? *Translation:* ${translation_name}\n\n ? SHADOW XTECH BIBLE`
            );
        } else {
            reply("? *Verse not found.* Please check the reference and try again.");
        }
    } catch (error) {
        console.error(error);
        reply("?? *An error occurred while fetching the Bible verse.* Please try again.");
    }
});
