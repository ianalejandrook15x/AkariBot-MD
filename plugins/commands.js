conn.sendList(m.chat, menu, botname, `Tσƈα Aϙυι Mι Aɱσɾ`, listSections, {quoted: fkontak})
}

if (command === 'grecia' || command === 'grecia') {
    m.react('✨');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1]);
    
    
    conn.sendButton(m.chat, submenu, menu0, randomImage, 
        [['Lσ ϙυҽ ɱҽ ɠυʂƚα ԃҽ ƚι', `#yo`], 
         ['Cυɱρʅιԃσ', `#cumplido`], 
         ['Iɱαɠҽɳҽʂ', `#imgg`],
         ['Pσҽɱαʂ', `#poema`]], 
        null, null, m);
}

handler.help = ['grecia'];
handler.tags = ['owner'];
handler.command = ['grecia'];
handler.owner = true;

export default handler;
