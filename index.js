let addHello = document.getElementsByClassName('add_hello')[0]

let textHello = document.querySelector('.text_hello')

//add Eventlistener

addHello.addEventListener('click', function() {
  textHello.textContent = textHello.textContent + ' Hello';
})