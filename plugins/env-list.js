const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const axios = require('axios');

function isEnabled(value) {
    // Function to check if a value represents a "true" boolean state
    return value && value.toString().toLowerCase() === "true";
}

cmd({
    pattern: "env",
    alias: ["setting", "allvar"],
    desc: "Displays bot settings",
    category: "menu",
    react: "⚙️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        // Royal & Stylish Settings Message
        let envSettings = `*⚙️ SHADOW-XTECH SETTINGS⚙️*

┣ 🔹 *Status View:* ${isEnabled(config.AUTO_STATUS_SEEN) ? "On" : "Off"}  
┣ 🔹 *Status Reply:* ${isEnabled(config.AUTO_STATUS_REPLY) ? "On" : "Off"}  
┣ 🔹 *Auto Reply:* ${isEnabled(config.AUTO_REPLY) ? "On" : "Off"}  
┣ 🔹 *Auto Sticker:* ${isEnabled(config.AUTO_STICKER) ? "On" : "Off"}  
┣ 🔹 *Auto Voice:* ${isEnabled(config.AUTO_VOICE) ? "On" : "Off"}  
┣ 🔹 *Custom Reacts:* ${isEnabled(config.CUSTOM_REACT) ? "On" : "Off"}  
┣ 🔹 *Auto React:* ${isEnabled(config.AUTO_REACT) ? "On" : "Off"}  
┣ 🔹 *Delete Links:* ${isEnabled(config.DELETE_LINKS) ? "On" : "Off"}  
┣ 🔹 *Anti-Link:* ${isEnabled(config.ANTI_LINK) ? "On" : "Off"}  
┣ 🔹 *Anti-Bad Words:* ${isEnabled(config.ANTI_BAD) ? "On" : "Off"}  
┣ 🔹 *Auto Typing:* ${isEnabled(config.AUTO_TYPING) ? "On" : "Off"}  
┣ 🔹 *Auto Recording:* ${isEnabled(config.AUTO_RECORDING) ? "On" : "Off"}  
┣ 🔹 *Always Online:* ${isEnabled(config.ALWAYS_ONLINE) ? "On" : "Off"}  
┣ 🔹 *Public Mode:* ${isEnabled(config.PUBLIC_MODE) ? "On" : "Off"}  
┣ 🔹 *Read Message:* ${isEnabled(config.READ_MESSAGE) ? "On" : "Off"} 
┣ 🔹 *Status React:* ${isEnabled(config.AUTO_STATUS_REACT) ? "on" : "off"}
┃  
┗━━━━━━━━━━━━━━━━━ 
📝 *Description:* ${config.DESCRIPTION}`;

        // Send stylish image
        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/3hrxbh.jpg' }, // Stylish Image
                caption: envSettings,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363369453603973@newsletter ',
                        newsletterName: "Ⴊl𐌀Ꮳk𐌕𐌀ႲႲჄ",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (error) {
        console.log(error);
        reply(`❌ *Error:* ${error.message}`);
    }
});
