//1

var footer = document.getElementsByTagName('footer')[0];
let click = 0

console.log(footer);

footer.addEventListener('click', function(){
    click++
    console.log(`Clic numéro ${click}`)
});

//2

var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function(){
    document.getElementById('navbarHeader').classList.toggle('collapse');
});

//3

var card = document.getElementsByClassName('card-text')[0];
var edit = document.getElementsByClassName('btn-outline-secondary')[0];

edit.addEventListener('click', function(){
    card.style.color = 'red';
});

//4

var card2 = document.getElementsByClassName('card-text')[1];
var edit2 = document.getElementsByClassName('btn-outline-secondary')[1];

edit2.addEventListener('click', function(){
    if (card2.style.color === '') {
        card2.style.color = 'green'
    } else {
        card2.style.color = ''
    }
});

//5

var header = document.getElementsByTagName('header')[0];
var bootstrap = document.getElementsByTagName('link')[0];

header.addEventListener('dblclick', function(){
    if (bootstrap.getAttribute('href') !== null){
        bootstrap.removeAttribute('href')
    } else {
        bootstrap.setAttribute('href','https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css')
    }
});

//6

var view = document.querySelectorAll('.btn-success');
var text = document.querySelectorAll('.card-text');
var img = document.querySelectorAll('.card-img-top');

for (let i = 0; i < view.length; i++) {
    view[i].addEventListener('mouseover', function(){
    if (text[i].style.display !== 'none'){
        img[i].style.width = '20%';
        text[i].style.display = 'none';
    } else {
        img[i].style.width = '100%';
        text[i].style.display = '';
    }
  })
};

//7

var parent = document.querySelector('.album .row');
var btn = document.querySelector('.btn-secondary');

btn.addEventListener('click', function(e){
    e.preventDefault();
    parent.insertBefore(parent.lastElementChild, parent.firstElementChild);
});

//8

var btn2 = document.querySelector('.btn-primary');

btn2.removeAttribute('href');

btn2.addEventListener('click', function(e){
    e.preventDefault();
    parent.insertBefore(parent.firstElementChild, parent.lastElementChild.nextSibling);
});

//9

window.addEventListener('keypress', function(e){
    if (this.window.getSelection().anchorNode !==  null) {
        if ('KeyK' && window.getSelection().anchorNode.data === 'JS & Events') {
            switch (e.code) {
                case 'KeyQ':
                    document.body.className = ''
                    document.body.classList.add('col-md-4');
                    break
                case 'KeyY':
                    document.body.className = ''
                    document.body.classList.add('offset-4', 'col-md-4')
                    break
                case 'KeyP':
                    document.body.className = ''
                    document.body.classList.add('offset-8', 'col-md-4')
                    break
                case 'KeyB':
                    document.body.className = ''
                    break
            }
        }
    }
});
