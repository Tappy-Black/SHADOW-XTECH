const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');
const util = require("util");
const { getAnti, setAnti, initializeAntiDeleteSettings } = require('../data/antidel');

initializeAntiDeleteSettings();

cmd({
    pattern: "antidelete",
    alias: ['antidel', 'ad'],
    desc: "Sets up the Antidelete",
    category: "misc",
    filename: __filename
},
async (conn, mek, m, { from, reply, q, text, isCreator, fromMe }) => {
    if (!isCreator) return reply('🚫 This command is only for the bot owner 👑');
    try {
        const command = q?.toLowerCase();

        switch (command) {
            case 'on':
                await setAnti('gc', false);
                await setAnti('dm', false);
                return reply('_🗑️ AntiDelete is now off for Group Chats 👤 and Direct Messages 📨._');

            case 'off gc':
                await setAnti('gc', false);
                return reply('_🗑️ AntiDelete for Group Chats 👤 is now disabled._');

            case 'off dm':
                await setAnti('dm', false);
                return reply('_🗑️ AntiDelete for Direct Messages 📨 is now disabled._');

            case 'set gc':
                const gcStatus = await getAnti('gc');
                await setAnti('gc', !gcStatus);
                return reply(`_🗑️ AntiDelete for Group Chats 👤 ${!gcStatus ? 'enabled' : 'disabled'}._`);

            case 'set dm':
                const dmStatus = await getAnti('dm');
                await setAnti('dm', !dmStatus);
                return reply(`_🗑️ AntiDelete for Direct Messages 📨 ${!dmStatus ? 'enabled' : 'disabled'}._`);

            case 'set all':
                await setAnti('gc', true);
                await setAnti('dm', true);
                return reply('_🗑️ AntiDelete set for all chats ✅._');

            case 'status':
                const currentDmStatus = await getAnti('dm');
                const currentGcStatus = await getAnti('gc');
                return reply(`_🗑️ AntiDelete Status 🟢_\n\n*📥 DM AntiDelete: 🗑️* ${currentDmStatus ? 'Enabled' : 'Disabled'}\n*👤 Group Chat AntiDelete: 🗑️* ${currentGcStatus ? 'Enabled' : 'Disabled'}`);

            default:
                const helpMessage = `-- *AntiDelete Command Guide: --*
                • \`\`.antidelete on\`\` - Reset AntiDelete for all chats (disabled by default)
                • \`\`.antidelete off gc\`\` - Disable AntiDelete for Group Chats
                • \`\`.antidelete off dm\`\` - Disable AntiDelete for Direct Messages
                • \`\`.antidelete set gc\`\` - Toggle AntiDelete for Group Chats
                • \`\`.antidelete set dm\`\` - Toggle AntiDelete for Direct Messages
                • \`\`.antidelete set all\`\` - Enable AntiDelete for all chats
                • \`\`.antidelete status\`\` - Check current AntiDelete status`;

                return reply(helpMessage);
        }
    } catch (e) {
        console.error("Error in antidelete command:", e);
        return reply("An error occurred while processing your request.");
    }
});

//vv

cmd({
    pattern: "x",
    alias: ['b', 'c'],
    desc: "Fetch and resend a ViewOnce message content (image/video/audio).",
    category: "misc",
    use: '<query>',
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const quotedMessage = m.quoted?.message?.viewOnceMessageV2 || m.quoted?.message;
        if (!quotedMessage) return reply("Please reply to a ViewOnce message.");

        const mediaType = quotedMessage.imageMessage
            ? 'imageMessage'
            : quotedMessage.videoMessage
                ? 'videoMessage'
                : quotedMessage.audioMessage
                    ? 'audioMessage'
                    : null;

        if (!mediaType) return reply("🚫 This is not a ViewOnce media message.");

        const media = quotedMessage[mediaType];
        const fileUrl = await conn.downloadAndSaveMediaMessage(media);
        const caption = media.caption || '';

        const sendOptions = {
            quoted: mek,
            ...(mediaType === 'imageMessage' && { image: { url: fileUrl }, caption }),
            ...(mediaType === 'videoMessage' && { video: { url: fileUrl }, caption }),
            ...(mediaType === 'audioMessage' && { audio: { url: fileUrl } })
        };

        await conn.sendMessage(from, sendOptions);
    } catch (e) {
        console.error("Error:", e);
        reply("🚫 An error occurred while fetching the ViewOnce message.");
    }
});
