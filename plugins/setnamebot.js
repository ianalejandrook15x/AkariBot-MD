import BotConfig from '../lib/mongoDB.js'; // Ruta al modelo de configuración del bot

export const handleSetNameBot = async (message, client) => {
  // Separar el comando y el nuevo nombre
  const commandParts = message.body.trim().split(" ");
  const newName = commandParts.slice(1).join(" ");  // Obtener el nombre después del comando

  // Verificar que el nuevo nombre tenga al menos 3 caracteres
  if (newName.length < 3) {
    message.reply("El nombre debe tener al menos 3 caracteres. Intenta de nuevo.");
    return;
  }

  try {
    // Usar findOneAndUpdate para actualizar el nombre del bot directamente
    const result = await BotConfig.findOneAndUpdate(
      {},  // No especificamos una condición, actualiza el primer documento encontrado
      { $set: { botName: newName } },  // Establecer el nuevo nombre
      { new: true, upsert: true }  // Si no existe el documento, lo crea. Retorna el documento actualizado
    );

    message.reply(`El nombre del bot ha sido actualizado a: ${result.botName}`);
  } catch (error) {
    console.error("Error al actualizar el nombre del bot:", error);
    message.reply("Hubo un problema al intentar actualizar el nombre del bot.");
  }
};
