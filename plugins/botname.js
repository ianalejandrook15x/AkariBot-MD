import BotConfig from './lib/mongoDB.js';

const getBotName = async () => {
  try {
    const botConfig = await BotConfig.findOne();
    return botConfig ? botConfig.botName : 'Bot'; // Si no existe, por defecto 'Bot'
  } catch (error) {
    console.error('Error al obtener el nombre del bot:', error);
    return 'Bot';  // Si hay un error, devuelve 'Bot'
  }
};

const sendMessageWithBotName = async (message) => {
  const botName = await getBotName(); // Obtener el nombre del bot
  message.reply(`Hola, soy ${botName}. ¿Cómo puedo ayudarte hoy?`);
};
