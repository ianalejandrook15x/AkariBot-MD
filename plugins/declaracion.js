import fetch from 'node-fetch';

// Handler principal para la declaración
let handler = async (m, { conn, usedPrefix, command }) => {
    if (command === 'declaracion') {
        const imageUrl = 'https://qu.ax/lpPQ.jpg'; // URL de la imagen de la confesión
        const messageText = `Llevamos mucho tiempo como amigos, te queria decir que hubo varias veces que me gustaste, pero no me atrevi a decirte lo que siento.\n Valoro nuestra amistad, espero que se nunca acabe, quiero que me disculpes por dejarte de hablar pero con el tiempo entendi el error que hice, estuve extrañando los abrazos que nos dabamos eran muy lindos espero poder empezar otra vez. ¿ Me disculpas ?\n\nPresiona "Sí" o "No" abajo para responder.`;

        await conn.sendButton(m.chat, messageText, 'Declaración', imageUrl, [
            ['Sí', `${usedPrefix}Si`],
            ['No', `${usedPrefix}No`]
        ], m);
    }
};

// Acción si el usuario elige "Sí"
let siHandler = async (m, { conn, usedPrefix, command }) => {
    if (command === 'si') {
        const yesImageUrl = 'https://qu.ax/abKS.jpg'; // Imagen para la respuesta "Sí"
        const yesAudioUrl = 'https://qu.ax/lyds.mp3'; // Audio para la respuesta "Sí"
        const yesMessageText = `> Que bueno que me hayas perdonado, te juro que me esforzare mas para estar a tu lado, y espero los calidos abrazos que nos dabamos vuelvan, Te quiero mucho... ♥`;

        await conn.sendMessage(m.chat, { 
            image: { url: yesImageUrl }, 
            caption: yesMessageText
        }, { quoted: m });

        await conn.sendMessage(m.chat, { 
            audio: { url: yesAudioUrl }, 
            mimetype: 'audio/mpeg'
        }, { quoted: m });
    }
};

// Acción si el usuario elige "No"
let noHandler = async (m, { conn, usedPrefix, command }) => {
    if (command === 'no') {
        const noImageUrl = 'https://qu.ax/eFBg.jpg'; // Imagen para la respuesta "No"
        const noMessageText = `Entiendo tu desicion, te deseo suerte. 😊`;
        const noAudioUrl = 'https://qu.ax/Pgxz.mp3'; // Audio para la respuesta "No"

        await conn.sendMessage(m.chat, { 
            image: { url: noImageUrl }, 
            caption: noMessageText
        }, { quoted: m });

        await conn.sendMessage(m.chat, { 
            audio: { url: noAudioUrl }, 
            mimetype: 'audio/mpeg'
        }, { quoted: m });
    }
};

// Vincular los comandos al texto "#declaracion", "si", y "no"
handler.command = ['perdon', 'si', 'no'];
handler.tags = ["downloader"]
handler.help = ["perdon"];

// Exportar el handler
export default handler;
