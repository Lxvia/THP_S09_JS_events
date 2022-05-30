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
var cards = document.querySelectorAll('.card-text');
var img = document.querySelectorAll('.card-img-top');

