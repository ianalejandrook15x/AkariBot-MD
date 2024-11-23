const WhatsAppAPI = require('whatsapp-api');

WhatsAppAPI.onMessage(async (message) => {

  if (message.body.startsWith('/setname')) {
    const nuevoNombre = message.body.split(' ')[1];
    cambiarNombreBot(nuevoNombre);
    await WhatsAppAPI.sendMessage(message.from, `El nombre del bot ha sido cambiado a ${botName}`);
  }
});
