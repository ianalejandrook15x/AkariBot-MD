import BotConfig from '../lib/mongoDB.js';  // Asegúrate de que la ruta sea correcta

export const handleSetNameBot = async (message, client) => {
  // Asegurarse de que el comando esté en el formato correcto
  const command = message.body.trim().split(" ");  // Separar la entrada en palabras
  if (command[0] === "/setnamebot" && command.length > 1) {
    const newName = command.slice(1).join(" "); // Unir todo el nombre

    // Verificar que el nuevo nombre tenga al menos 3 caracteres
    if (newName.length < 3) {
      message.reply("Por favor, ingresa un nombre válido (al menos 3 caracteres).");
      return;
    }

    try {
      // Actualizar el nombre del bot en la base de datos
      const botConfig = await BotConfig.findOne();
      if (!botConfig) {
        // Si no existe un documento, crear uno
        const newBotConfig = new BotConfig({ botName: newName });
        await newBotConfig.save();
      } else {
        // Si ya existe un documento, actualizarlo
        botConfig.botName = newName;
        await botConfig.save();
      }

      message.reply(`El nombre del bot ha sido cambiado a: ${newName}`);
    } catch (error) {
      console.error("Error al cambiar el nombre del bot:", error);
      message.reply("Hubo un error al intentar cambiar el nombre del bot. Intenta nuevamente.");
    }
  } else {
    message.reply("Por favor, usa el comando en el formato correcto: /setnamebot <nuevo_nombre>");
  }
};
