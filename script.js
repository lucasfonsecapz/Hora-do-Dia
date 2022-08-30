function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var Data = new Date()
    var hora = Data.getHours()
    msg.innerHTML = `Agora são ${hora}horas.`
if (hora >= 0 && hora < 12) {
    img.src = 'fotomanha.png'
    document.body.style.background = '#8A9B6E'
} else if (hora >= 12 && hora <= 18 ) {
    img.src = 'fototarde.png'
    document.body.style.background = '#4C344E'
} else { 
    img.src = 'fotonoite.png'
    document.body.style.background = '#675C98'
}
}