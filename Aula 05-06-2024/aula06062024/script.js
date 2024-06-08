//Eventos de Mouse

document.getElementById('clickBtn').addEventListener('click',() => {
    alert('Baracutaia')
});
document.getElementById('dblclickBtn').addEventListener('dblclick',() => {
    alert('Baracutaia')
});
document.getElementById('mousedownBtn').addEventListener('mousedown',() => {
    alert('Baracutaia')
});
document.getElementById('mouseupBtn').addEventListener('mouseup',() => {
    alert('Baracutaia')
});
document.getElementById('mouseoutBtn').addEventListener('mouseout',() => {
    alert('Baracutaia')
});

document.getElementById('mousemove').addEventListener('mousemove',() => {
    alert('Baracutaia')
});
document.getElementById('mouseoverBtn').addEventListener('mouseover',() => {
    alert('Baracutaia')
});
document.getElementById('contextMenuBtn').addEventListener('contextmenu',(event) => {
    event.preventDefault();
    alert('Baracutaia')
});


//Eventso de Teclado

document.getElementById('keydownBtn').addEventListener('keydown',() => {
    alert('Baracutaia')
});
document.getElementById('keypressBtn').addEventListener('keypress',() => {
    alert('Baracutaia')
});
document.getElementById('keyupBtn').addEventListener('keyup',() => {
    alert('Baracutaia')
});

// //Janela

// window.addEventListener('load',() => {
//     alert('Página Carregada')
// })
// window.addEventListener('unload',() => {
//     alert('A página está sendo descarregada')
// })
// window.addEventListener('resize',() => {
//     alert('Mudando o tamanho é...')
// })
// window.addEventListener('scroll',() => {
//     alert('Pra que mexer?')
// })

//Eventos de Tempo

document.getElementById('timeout').addEventListener('click',() => {
    setTimeout(()=>{
        alert('Achou que n tinha nada né otário')
    },2000)
    
});
document.getElementById('interval').addEventListener('click',() => {
    
    setInterval(()=>{
        alert('10')
    },500)
    
});