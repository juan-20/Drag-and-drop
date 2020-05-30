const cards = document.querySelectorAll('.card');
const dropzone = document.querySelectorAll('.dropzone');

cards.forEach(function (card) {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag' ,drag)
    card.addEventListener('dragend', dragend)
})

function dragstart(){
    // console.log('> (CARD) Começou a arrastar');
    // muda a cor quando arrasta o card
    dropzone.forEach(dropzone => dropzone.classList.add('evidencia'))

    this.classList.add('carregando')
}

function drag(){
    // console.log('>(CARD) Sendo arrastaddo');
}

function dragend(){
    // console.log('>(CARD) Parou de arrastar');
    dropzone.forEach(dropzone => dropzone.classList.remove('evidencia'))

    this.classList.remove('carregando')
}

// onde soltar os cartões

dropzone.forEach(dropzone=>{
    dropzone.addEventListener('dragenter' , dragenter)
    dropzone.addEventListener('dragover'  , dragover)
    dropzone.addEventListener('dragleave' , dragleave)
    dropzone.addEventListener('drop'      , drop)
})

function dragenter(){
    // console.log('> (DROPZONE) Entrou na zona de drop');
    
   
}

function dragover(){
    // this === dropzone
    this.classList.add('over')
    // console.log('> (DROPZONE) Esta na zona de drop');

    // pega o cartão que ta sendo carregado
    const cartaoarrastado = document.querySelector('.carregando')

    this.appendChild(cartaoarrastado)


}

function dragleave(){
    // console.log('> (DROPZONE) Saiu da zona de drop');
    this.classList.remove('over')
    
}

function drop(){
    // console.log('> (DROPZONE) dropou');
}