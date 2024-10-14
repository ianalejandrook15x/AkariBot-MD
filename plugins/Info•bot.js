import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `🌸 ¡Hola! Soy Akari, en que puedo ayudarte hoy?\n\n✰ Usa *.menu* para ver mis comandos.`, m, rcanal, )
}
/*if (/^corin|corín|corinplus|corínplus|corinplushost|corínplushost|plus$/i.test(m.text)) {
conn.reply(m.chat, `🚀 CorinPlus Hosting ¡El plus que necesitas!\n🌸 *Dash:* https://dash.corinplus.com\n🌸 *Panel:* https://ctrl.corinplus.com`, m, rcanal, )
}*/
if (/^ian$/i.test(m.text)) {
conn.reply(m.chat, `Hσʅα Iαɳ ҽʂ ɱι ƈɾҽαԃσɾ`, m, rcanal, )
}
return !0;
};
export default handler;
