let botName = "AkariBot-MD";

function cambiarNombreBot(nuevoNombre) {
  botName = nuevoNombre;
  console.log(`El nombre del bot ha sido cambiado a: ${botName}`);
}

function generarComando(comandoBase) {
  return comandoBase.replace("${botname}", botName);
}

const mensajeUsuario = "/setname AlejandroBot";
const partesComando = mensajeUsuario.split(" ");

if (partesComando[0] === "/setname") {
  const nuevoNombre = partesComando[1];
  cambiarNombreBot(nuevoNombre);
}

const comandoEjemplo = generarComando("/help ${botname}");
console.log(comandoEjemplo); // Imprimirá: /help AlejandroBot
