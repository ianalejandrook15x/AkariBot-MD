// plugins/setnamebot.js
import { BotConfig } from '../lib/mongoDB.js';  // Importar como exportación nombrada

export const handleSetNameBot = async (message, client) => {
  const commandParts = message.body.trim().split(" ");
  const newName = commandParts.slice(1).join(" ");

  // Validar el nuevo nombre
  if (newName.length < 3) {
    message.reply("El nombre debe tener al menos 3 caracteres.");
    return;
  }

  try {
    const result = await BotConfig.findOneAndUpdate(
      {},  // No especificamos condición para actualizar el primer documento
      { $set: { botName: newName } },  // Actualizar el campo botName
      { new: true, upsert: true }  // Crear si no existe, y devolver el documento actualizado
    );

    message.reply(`El nombre del bot ha sido actualizado a: ${result.botName}`);
  } catch (error) {
    console.error("Error al actualizar el nombre del bot:", error);
    message.reply("Hubo un problema al actualizar el nombre del bot.");
  }
};
