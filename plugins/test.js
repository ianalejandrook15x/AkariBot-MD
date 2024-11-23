import mongoose = from 'mongoose'
import BotConfig = from '../models/botConfig' // Asume que tienes un modelo para almacenar la configuración del bot.

module.exports = (client) => {
    // Escuchar los mensajes entrantes
    client.on('message', async (message) => {
        // Verificar si el mensaje comienza con el comando '/setnamebot'
        if (message.body.startsWith('/setnamebot')) {
            const newName = message.body.split(' ')[1]; // Obtener el nuevo nombre del bot

            if (!newName || newName.length < 3) {
    message.reply('Por favor, ingresa un nombre válido (al menos 3 caracteres).');
    return;
}

            // Verificar si se proporcionó un nombre
            if (newName) {
                // Actualizar el nombre del bot en la base de datos
                try {
                    await BotConfig.updateOne({}, { botName: newName }); // Asume que tienes un solo documento en la colección para la configuración

                    // Responder con un mensaje de confirmación
                    message.reply(`¡El nombre del bot ha sido cambiado a ${newName}!`);
                } catch (err) {
                    console.error('Error al actualizar el nombre del bot:', err);
                    message.reply('Hubo un error al cambiar el nombre del bot. Intenta nuevamente.');
                }
            } else {
                message.reply('Por favor, ingresa un nombre válido para el bot.');
            }
        }
    });
};
