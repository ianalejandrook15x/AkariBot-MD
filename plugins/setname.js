const WhatsAppAPI = require('whatsapp-api');

let botName = 'IanBot';

WhatsAppAPI.onMessage(async (message) => {
  const { body } = message;

  if (body.startsWith('/setname ')) {
    const nuevoNombre = body.split(' ')[1];

    // Validación básica para evitar nombres vacíos
    if (nuevoNombre.trim() === '') {
      await WhatsAppAPI.sendMessage(message.from, 'Debes proporcionar un nuevo nombre.');
      return;
    }

    botName = nuevoNombre;
    await WhatsAppAPI.sendMessage(message.from, `El nombre del bot ha sido cambiado a ${botName}`);
  }
});
