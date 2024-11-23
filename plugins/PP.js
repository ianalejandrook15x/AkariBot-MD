import fs from 'fs';

// Cargar la configuración inicial
let config = {};
try {
    config = JSON.parse(fs.readFileSync('config.json'));
} catch (error) {
    console.error('Error al cargar la configuración:', error);
    config = { botName: 'IanBot' }; // Valor por defecto
}
let botName = config.botName;

// Función para guardar la configuración
function saveConfig(newBotName) {
    config.botName = newBotName;
    fs.writeFileSync('config.json', JSON.stringify(config));
}

// Función para generar un comando con el nombre del bot
function generateCommand(commandBase) {
    return commandBase.replace("${botname}", botName);
}

// Ejemplo de uso en un manejador de mensajes
function handleMessage(message) {
    if (message.startsWith('/setnombre ')) {
        const newBotName = message.split(' ')[1];
        saveConfig(newBotName);
        botName = newBotName;
        return `El nombre del bot ha sido cambiado a ${botName}`;
    }

    // Otros comandos que utilizan ${botname}
    if (message === '/hola') {
        return `Hola, soy ${botName}`;
    }
}
