 cartes = document.querySelectorAll('.carte');

let carteRetourne = false;
let premiereCarte, secondeCarte;
let verouillage = false;

cartes.forEach(carte => {
    carte.addEventListener('click', retourneCarte)
})
function retourneCarte(){
    if(verouillage) return;
    // console.log(this.childNodes);
    this.childNodes[1].classList.toggle('active');
    if(!carteRetourne){
        carteRetourne = true;
        premiereCarte= this;
        return;
    }
    carteRetourne=false;
    secondeCarte = this;
    // console.log(premiereCarte, secondeCarte);
    correspondance();
}

function correspondance(){
    if(premiereCarte.getAttribute('data-attr') === secondeCarte.getAttribute('data-attr')) {
        premiereCarte.removeEventListener('click', retourneCarte);
        secondeCarte.removeEventListener('click', retourneCarte);
        setTimeout(() =>{
            premiereCarte.classList.add('fond');
        secondeCarte.classList.add('fond');

        },2000)
    }else {
        verouillage = true;
        setTimeout(() => {
            premiereCarte.childNodes[1].classList.remove('active')
            secondeCarte.childNodes[1].classList.remove('active')
            verouillage = false;

        }, 1500)
    }
}
function aleatoire(){
    cartes.forEach(card => {
        let nmbreAL = Math.floor(Math.random() * 12);
        card.style.order = nmbreAL;
    })
}
aleatoire();