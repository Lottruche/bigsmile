let haut = []; //tableau vide pour stocker les variables
let milieu = [];
let bas = [];


function preload() {

  //les 12 images du bandeau du haut
  let imgHaut01 = loadImage(
    "images/haut/01.jpg"
  );
  let imgHaut02 = loadImage(
    "images/haut/02.jpg"
  );
  let imgHaut03 = loadImage(
    "images/haut/03.jpg"
  );
  let imgHaut04 = loadImage(
    "images/haut/04.jpg"
  );
  let imgHaut05 = loadImage(
    "images/haut/05.jpg"
  );
  let imgHaut06 = loadImage(
    "images/haut/06.jpg"
  );


  haut = [imgHaut01, imgHaut02, imgHaut03, imgHaut04, imgHaut05, imgHaut06]; //on stocke les variables des images dans le tableau

  //les 12 images du bandeau du milieu
  let imgMilieu01 = loadImage(
    "images/milieu/01.jpg"
  );
  let imgMilieu02 = loadImage(
    "images/milieu/02.jpg"
  );
  let imgMilieu03 = loadImage(
    "images/milieu/03.jpg"
  );
  let imgMilieu04 = loadImage(
    "images/milieu/04.jpg"
  );
  let imgMilieu05 = loadImage(
    "images/milieu/05.jpg"
  );
  let imgMilieu06 = loadImage(
    "images/milieu/06.jpg"
  );


  milieu = [imgMilieu01, imgMilieu02, imgMilieu03, imgMilieu04, imgMilieu05, imgMilieu06]; //on stocke les variables des images dans le tableau

  //les 12 images du bandeau du bas
  let imgbas01 = loadImage(
    "images/bas/01.jpg"
  );
  let imgbas02 = loadImage(
    "images/bas/02.jpg"
  );
  let imgbas03 = loadImage(
    "images/bas/03.jpg"
  );
  let imgbas04 = loadImage(
    "images/bas/04.jpg"
  );
  let imgbas05 = loadImage(
    "images/bas/05.jpg"
  );
  let imgbas06 = loadImage(
    "images/bas/06.jpg"
  );


  bas = [imgbas01, imgbas02, imgbas03, imgbas04, imgbas05, imgbas06]; //on stocke les variables des images dans le tableau

}

function setup() {
  createCanvas(500, 700);
  noLoop(); //en désactive la boucle d'animation

  // Création du bouton pour changer les images
  let btn = createButton('Nouvelle combinaison'); // Crée le bouton avec le texte
  btn.mousePressed(redessiner); // Quand le bouton est pressé, appelle redessiner()
  // Appliquer la classe CSS au bouton
  btn.class('bouton-perso');

}

function draw() {
  background(220);

  let RandomHaut = random(haut); //on choisi une valeur du tableau aléatoirement
  image(RandomHaut, 0, 0,500,150); //on affiche l'image aléatoirement et on la positionne

  let RandomMilieu = random(milieu); //on choisi une valeur du tableau aléatoirement
  image(RandomMilieu, 0, 150,500,150); //on affiche l'image aléatoirement et on la positionne

  let RandomBas = random(bas); //on choisi une valeur du tableau aléatoirement
  image(RandomBas, 0, 300,500, 400); //on affiche l'image aléatoirement et on la positionne
}


// Fonction appelée lorsque le bouton est pressé
function redessiner() {
  redraw(); // Redessine l'image
}


// fonction si on appuie sur une touche
function keyPressed() {
  // si on appuie sur la touche "s" on sauve l'image
  if (key == "s") {
    save("image.png");
  }

}