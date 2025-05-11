

/*
const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *Ⴊl𐌀Ꮳk𐌕𐌀ႲႲჄ*

> *BOT REPO:*
*|* https://github.com/Tappy-Black/SHADOW-XTECH 

> *SUPPORT GROUP:*
*|* https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10
*╰──────────────●●►*

> *CREATED BY Ⴊl𐌀Ꮳk𐌕𐌀ႲႲჄ*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363369453603973@newsletter',
      newsletterName: "Ⴊl𐌀Ꮳk𐌕𐌀ႲႲჄ",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'Sʜᴀᴅᴏᴡ Xᴛᴇᴄʜ',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/Tappy-Black/SHADOW-XTECH" ,
thumbnailUrl: "https://files.catbox.moe/3hrxbh.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
*/

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "script",
    alias: ["repo", "sc", "info"],
    desc: "Fetch information about a GitHub repository.",
    react: "🎗️",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/Tappy-Black/SHADOW-XTECH';

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        // Fetch repository details using GitHub API
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const repoData = await response.json();

        // Format the repository information
        const formattedInfo = `*𝐇𝐄𝐋𝐋𝐎 𝐓𝐇𝐄𝐑𝐄 𝗦𝗛𝗔𝗗𝗢𝗪-𝗫𝗧𝗘𝗖𝗛 𝗪.𝗔 𝐁𝐎𝐓 𝐔𝐒𝐄𝐑!😇👑* 

> *A whatsapp bot that enhance your experience with amazing features,developed by Ⴊl𐌀Ꮳk𐌕𐌀ႲႲჄ 😇.*🎲

*𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐄𝐈𝐍𝐆 𝗦𝗛𝗔𝗗𝗢𝗪-𝗫𝗧𝗘𝗖𝗛 🎲* 

> *ᴅᴏɴ'ᴛ ғᴏʀɢᴇᴛ ᴛᴏ sᴛᴀʀ & ғᴏʀᴋ ᴛʜᴇ ʀᴇᴘᴏ🌟🍴*

https://github.com/Tappy-Black/SHADOW-XTECH 
──────────────────
${readMore}
\`BOT NAME:\`😇
> ${repoData.name}

\`OWNER NAME:\`👑
> ${repoData.owner.login}

\`STARS:\`🌟
> ${repoData.stargazers_count}

\`FORKS:\`🍴
> ${repoData.forks_count}

\`DESCRIPTION:\`📃
> ${repoData.description || 'No description'}\n
──────────────────
\n> *© Powered by Ⴊl𐌀Ꮳk𐌕𐌀ႲႲჄ😇* 🎲`;

        // Send an image with the formatted info as a caption and context info
        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/3hrxbh.jpg` },
            caption: formattedInfo,
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

        // Send the audio file with context info
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/jrfk1n.mp3' },
            mimetype: 'audio/mp4',
            ptt: true,
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

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("🎲 Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
