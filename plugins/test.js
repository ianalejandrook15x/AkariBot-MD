module.exports = async function cambiarNombreBot(message, botName, admins) {
    // Extraer el nuevo nombre del mensaje
    const args = message.body.split(' ');

    // Verificación: El mensaje debe tener un nuevo nombre (por ejemplo, /cambiar_nombre AlejandroBot)
    if (args.length > 1) {
        const newName = args.slice(1).join(' ').trim(); // Obtener el nuevo nombre

        // Verificar si el usuario es un administrador
        if (admins.includes(message.from)) {
            botName = newName; // Cambiar el nombre del bot
            return `¡El nombre del bot ha sido cambiado a ${botName}!`;
        } else {
            return "No tienes permisos para cambiar el nombre del bot.";
        }
    } else {
        return "Por favor, proporciona un nuevo nombre para el bot. Ejemplo: /cambiar_nombre AlejandroBot";
    }
};
