import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `🌸 ¡Hola! Soy Akari, en que puedo ayudarte hoy?\n\n✰ Usa *.menu* para ver mis comandos.`, m, rcanal, )
}

if (chat.isBaneed) return
if (/^.menu$/i.test(m.text)) {
conn.reply(m.chat, `El comando *.menu* no se encuentra disponibles debido a un fallo con la API vuelva mas tarde ⚠\n\n> ianalejandrook15 `, m, rcanal, )
}

if (chat.isBaneed) return
if (/^.help$/i.test(m.text)) {
conn.reply(m.chat, `El comando *.help* no se encuentra disponibles debido a un fallo con la API vuelva mas tarde ⚠\n\n> ianalejandrook15 `, m, rcanal, )
}

if (chat.isBaneed) return
if (/^reglas$/i.test(m.text)) {
conn.reply(m.chat, `*Hola si quieres unir a la bot deberas seguir las reglas basicas* 👇\n\n> No hacer spam a la bot\n\n> No llamar a la bot\n\n> El grupo debe de tener un minimo de 25 miembros o no sera otorgado el bot\n\n> No añadir a la bot sin permisos del creador \n\n> Wa.me/5493876639332\n\n> Disfrute de *AkariBot-MD Powered By Ianalejandrook15x*`, m, rcanal, )
}
  
if (/^ian$/i.test(m.text)) {
conn.reply(m.chat, `Hola Ian es mi creador, si deseas unir a la bot puedes contactarte con el aqui te dejo su numero\n\n> wa.me/5493876639332`, m, rcanal, )
}
return !0;
};
export default handler;
