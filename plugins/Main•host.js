let handler = async (m, { conn, usedPrefix, command, text }) => {

let txt = `Hola` 

await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363301598733462@newsletter', 
serverMessageId: '', 
newsletterName: 'Gracias por perdonarme' }, 
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `Gɾαƈιαʂ ρσɾ ρҽɾԃσɳαɾɱҽ`,
body: `Dilan es gay`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/VccqK.jpg', 
sourceUrl: redeshost}}},
{ quoted: fkontak})
} 

handler.help = ['si']
handler.tags = ['RPS']
handler.command = ['si']

export default handler
