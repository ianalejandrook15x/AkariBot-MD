let handler = async (m, { conn }) => {
let chat = global.db.data.chats[m.chat]
if (!chat.isBanned) return conn.reply(m.chat, 'Gracias por perdonarme', m, fake)
chat.isBanned = false

handler.help = ['unbanchat'];
handler.tags = ['grupo'];
handler.command = ['perdon','vale','desbanchat']
handler.group = true

export default handler
