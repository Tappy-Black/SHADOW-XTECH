const axios = require("axios");
const { cmd } = require("../command");

cmd({
  pattern: "cpt",
  alias: ["capcut", "capcut-dl"],
  desc: "To download Capcut templates.",
  react: "🎥",
  category: "download",
  filename: __filename
}, async (conn, m, store, { from, q, reply }) => {
  try {
    if (!q || !q.startsWith("http")) {
      return reply("❌ Please provide a valid Capcut link.");
    }

    await conn.sendMessage(from, {
      react: { text: "⏳", key: m.key }
    });

    const response = await axios.get(`https://api.diioffc.web.id/api/download/capcut?url=${encodeURIComponent(q)}`);
    const data = response.data;

    if (!data || data.status !== true || !data.result || !data.result.url) {
      return reply("⚠️ Failed to fetch Capcut content. Please check the link and try again.");
    }

    // Sending the video
    await conn.sendMessage(from, {
      video: { url: data.result.url },
      mimetype: "video/mp4",
      caption: `📥 *Capcut Template Downloaded Sʜᴀᴅᴏᴡ Xᴛᴇᴄʜ*\n🧬 *Title:* ${data.result.title}\n⌛ *Size:* ${data.result.size}`
    }, { quoted: m });

  } catch (error) {
    console.error("Error:", error);
    reply("❌ An error occurred while processing your request. Please try again.");
  }
});