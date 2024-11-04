import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^No Te perdono$/i.test(m.text)) {
conn.reply(m.chat, `Esta bien, agradezco tu sinceridad por haberme respondido, te deseo suerte.`, m, )
}

if (chat.isBaneed) return
if (/^reglas$/i.test(m.text)) {
conn.reply(m.chat, `*Hola si quieres unir a la bot deberas seguir las reglas basicas* 👇\n\n> No hacer spam a la bot\n\n> No llamar a la bot\n\n> El grupo debe de tener un minimo de 25 miembros o no sera otorgado el bot\n\n> No añadir a la bot sin permisos del creador \n\n> Wa.me/5493876639332\n\n> Disfrute de *AkariBot-MD Powered By Ianalejandrook15x*`, m, rcanal, )
}
  
if (/^Si Te perdono$/i.test(m.text)) {
conn.reply(m.chat, `Muchas gracias agradezco tu sinceridad por perdonarme, juro que dare todo de mi. Te quiero mucho... 😙`, m, )
}
return !0;
};
export default handler;
