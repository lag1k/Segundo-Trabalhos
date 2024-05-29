function attRelogio(){
    const agora = new Date();
    const hora = String(agora.getHours()).padStart(2,'0');
    const minutos = String(agora.getMinutes()).padStart(2,'0');
    const segundos = String(agora.getSeconds()).padStart(2,'0');

    const formaTempo = `${hora}:${minutos}:${segundos}`;
    document.getElementById('relogio').textContent = formaTempo

    const data = new Date();
    const dia = String(data.getDay()).padStart(2,'0');
    const mes = String(data.getMonth()).padStart(2,'0');
    const ano = String(data.getFullYear()).padStart(2,'0');

    const formaDia = `${dia}/${mes}/${ano}`;
    document.getElementById('data').textContent = formaDia

    
}
setInterval(attRelogio, 1000);
attRelogio();

function wallpaper() {
    const display = window.innerWidth;
    const body = document.body; 

    if (display > 425) { 
        body.style.backgroundImage = "url(https://i.pinimg.com/564x/92/db/48/92db481112467326cc187edf9a35b746.jpg)"; 
    } else {
        body.style.backgroundImage = "url(https://i.pinimg.com/564x/ec/6d/42/ec6d429059c5cbec66e0fcf912c21783.jpg)";
    }
}

wallpaper();
window.addEventListener('resize', wallpaper);
