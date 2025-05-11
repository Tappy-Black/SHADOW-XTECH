const { cmd } = require('../command');

cmd({
    pattern: "happy",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "😂",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const loadingMessage = await conn.sendMessage(from, { text: '😂' });
        const emojiMessages = [
            "😃", "😄", "😁", "😊", "😎", "🥳",
            "😸", "😹", "🌞", "🌈", "😃", "😄",
            "😁", "😊", "😎", "🥳", "😸", "😹",
            "🌞", "🌈", "😃", "😄", "😁", "😊"
        ];

        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: line,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

cmd({
    pattern: "heart",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "❤️",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const loadingMessage = await conn.sendMessage(from, { text: '🖤' });
        const emojiMessages = [
            "💖", "💗", "💕", "🩷", "💛", "💚",
            "🩵", "💙", "💜", "🖤", "🩶", "🤍",
            "🤎", "❤️‍🔥", "💞", "💓", "💘", "💝",
            "♥️", "💟", "❤️‍🩹", "❤️"
        ];

        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: line,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

cmd({
    pattern: "angry",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "🤡",
    filename: __filename
},
async (conn, mek, m, { from, reply, isGroup }) => {
    try {
        // Check if command is used in a group
        if (isGroup) {
            return reply("❌ This command can only be used in private chat.");
        }

        // Send initial loading message with emoji
        const loadingMessage = await conn.sendMessage(from, { text: '😡' });
        const emojiMessages = [
            "😡", "😠", "🤬", "😤", "😾", 
            "😡", "😠", "🤬", "😤", "😾"
        ];

        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: line,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

// sad

cmd({
    pattern: "sad",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "😶",
    filename: __filename
},
async (conn, mek, m, { from, reply, isGroup }) => {
    try {
        // Check if the command is used in a group
        if (isGroup) {
            return reply("❌ *This command only works in private chat!*");
        }

        const emojiMessages = [
            "🥺", "😟", "😕", "😖", "😫", "🙁",
            "😩", "😥", "😓", "😪", "😢", "😔",
            "😞", "😭", "💔", "😭", "😿"
        ];

        // Send initial emoji as loading message
        const loadingMessage = await conn.sendMessage(from, { text: "😔" });

        for (const emoji of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 400)); // Fast response
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: emoji,
                        },
                    },
                },
                {}
            );
        }

    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

// shy

cmd({
    pattern: "shy",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "🧐",
    filename: __filename
},
async (conn, mek, m, { from, reply, isGroup }) => {
    try {
        // Check if the command is used in a group
        if (isGroup) {
            return reply("❌ *This command only works in private chat!*");
        }

        const loadingMessage = await conn.sendMessage(from, { text: '🧐' });
        const emojiMessages = ["😳", "😊", "😶", "🙈", "🙊", "😳", "😊", "😶", "🙈", "🙊"];

        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 500)); // Faster response time
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: line,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

// moon

cmd({
    pattern: "moon",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "🌚",
    filename: __filename
},
async (conn, mek, m, { from, reply, isGroup }) => {
    try {
        // ✅ Command sirf inbox/private chat ke liye set
        if (isGroup) {
            return reply("❌ *Yeh command sirf private chat mein kaam karti hai!*");
        }

        // ✅ Message send karne se pehle ensure karo ke async handling theek ho
        const loadingMessage = await conn.sendMessage(from, { text: '🌝' });

        // ✅ Delay kam kar diya aur async execution ko optimize kiya
        const emojiMessages = [
            "🌗", "🌘", "🌑", "🌒", "🌓", "🌔",
            "🌕", "🌖", "🌗", "🌘", "🌑", "🌒",
            "🌓", "🌔", "🌕", "🌖", "🌗", "🌘",
            "🌑", "🌒", "🌓", "🌔", "🌕", "🌖",
            "🌗", "🌘", "🌑", "🌒", "🌓", "🌔",
            "🌕", "🌖", "🌝"
        ];

        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 300)); // ✅ 300ms delay for faster response
            await conn.relayMessage(from, {
                protocolMessage: {
                    key: loadingMessage.key,
                    type: 14,
                    editedMessage: { conversation: line },
                },
            }, {});
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

// confused

cmd({
    pattern: "confused",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "🤔",
    filename: __filename
},
async (conn, mek, m, { from, isGroup }) => {
    try {
        // ❌ Agar group mein use kare to warning de
        if (isGroup) {
            return await conn.sendMessage(from, { text: "⚠️ *Yeh command sirf inbox (private chat) ke liye hai!*" }, { quoted: mek });
        }

        let loadingMessage = await conn.sendMessage(from, { text: '🤔' });

        // 🤔 Emoji Animation 🤔
        const emojiMessages = ["🤔", "😬", "🥴", "😒", "☹️", "😵", "😟"];

        // Send emoji animations
        for (const emoji of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: emoji,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        return await conn.sendMessage(from, { text: `❌ *Error!* ${e.message}` }, { quoted: mek });
    }
});

// Hot

cmd({
    pattern: "hot",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "🔥",
    filename: __filename
},
async (conn, mek, m, { from, isGroup }) => {
    try {
        // ❌ Agar group mein use kare to warning de
        if (isGroup) {
            return await conn.sendMessage(from, { text: "⚠️ *Yeh command sirf inbox (private chat) ke liye hai!*" }, { quoted: mek });
        }

        let loadingMessage = await conn.sendMessage(from, { text: '🔥' });

        // 🔥 Emoji Animation 🔥
        const emojiMessages = ["😘", "🥵", "😽", "💋", "👄", "🫦", "👩‍❤️‍💋‍👩"];

        // Send emoji animations
        for (const emoji of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: emoji,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        return await conn.sendMessage(from, { text: `❌ *Error!* ${e.message}` }, { quoted: mek });
    }
});

// Nikal

cmd({
    pattern: "nikal",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "🗿",
    filename: __filename
},
async (conn, mek, m, { from, isGroup }) => {
    try {
        // Check if command is used in a group
        if (!isGroup) {
            return await conn.sendMessage(from, { 
                text: "❌ *Error:* Yeh command sirf group mein kaam karti hai! Kisi member ko tag karke use kare."
            }, { quoted: mek });
        }

        let loadingMessage;
        for (let i = 0; i < 3; i++) { // Try sending message up to 3 times
            loadingMessage = await conn.sendMessage(from, { text: '🔄 Loading...' });
            if (loadingMessage.key) break;
            await new Promise(resolve => setTimeout(resolve, 500)); // Wait and retry
        }

        if (!loadingMessage?.key) {
            return await conn.sendMessage(from, { text: "❌ *Error:* Message key not found, try again." }, { quoted: mek });
        }

        // 🔥 New ASCII Art Messages 🔥
        const asciiMessages = [
            "🚀 *Nikal Pehli Fursat Mein!* 🚀",
            "🔥 *Beta Mazak Ho Gaya?* 🔥",
            "💨 *Udhar Se Nikal!* 💨",
            "😆 *Ja Beta Ja...* 😆",
            "👋 *Bye Bye Tata!* 👋"
        ];

        // Send ASCII animations with retry
        for (const asciiMessage of asciiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay increased
            let success = false;
            
            for (let i = 0; i < 3; i++) { // Try editing up to 3 times
                try {
                    await conn.relayMessage(
                        from,
                        {
                            protocolMessage: {
                                key: loadingMessage.key,
                                type: 14,
                                editedMessage: {
                                    conversation: asciiMessage,
                                },
                            },
                        },
                        {}
                    );
                    success = true;
                    break;
                } catch (error) {
                    console.log(`Retry ${i + 1}: ${error.message}`);
                    await new Promise(resolve => setTimeout(resolve, 500));
                }
            }

            if (!success) {
                return await conn.sendMessage(from, { text: "❌ *Error:* Message edit failed." }, { quoted: mek });
            }
        }
    } catch (e) {
        console.log(e);
        return await conn.sendMessage(from, { text: `❌ *Error!* ${e.message}` }, { quoted: mek });
    }
});