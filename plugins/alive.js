const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "⌚",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `
╭═══✧〈 *🧊 𝑺ʜᴀᴅᴏᴡ ✘ᴛᴇᴄʜ 🧊* 〉✧═══✇
┴╭══════════════✇
┃🟢┃• *⏳ Uptime*:  ${runtime(process.uptime())} 
┃🟢┃• *🤖 Ram usage*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}GB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}TB
┃🟢┃• *⚙️ HostName*: ${os.hostname()}
┃🟢┃• *👑 Creator*: Ⴊl𐌀Ꮳk𐌕𐌀ႲႲჄ  
┃🟢┃• *🏷️ Version*: *4.0.0 Bᴇᴛᴀ* 
 ┬╰══════════════☹︎
 ╰═════════════════
> © 𝑺ʜᴀᴅᴏᴡ ✘ᴛᴇᴄʜ`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/3hrxbh.jpg` },  
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363369453603973@newsletter',
                    newsletterName: 'Ⴊl𐌀Ꮳk𐌕𐌀ႲႲჄ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`🚫 An error occurred: ${e.message}`);
    }
});
