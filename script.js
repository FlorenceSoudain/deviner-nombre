var essais = 9;

var choixUtilisateur = 0;

var nombreAleatoire = Math.random()*100;
nombreAleatoire = Math.round(nombreAleatoire);

document.getElementById('envoie').addEventListener('click', function () {

    choixUtilisateur = document.getElementById('proposition').value;
    choixOrdi = nombreAleatoire;
    essais = essais--;

    if (choixOrdi < choixUtilisateur)
    {
        document.getElementById('rep').innerHTML = "Le chiffre choisi est trop grand.";
        document.getElementById('reste').innerHTML = "Il vous reste " + essais-- + " essais.";
    }
    if (choixOrdi > choixUtilisateur)
    {
        document.getElementById('rep').innerHTML = "Le chiffre choisi est trop petit.";
        document.getElementById('reste').innerHTML = "Il vous reste " + essais-- + " essais.";
    }
    if (choixOrdi == choixUtilisateur)
    {
        document.getElementById('rep').innerHTML = "Félicitation. Vous avez gagné !";
        document.getElementById('rep').style.color = "red";
        document.getElementById('rep').style.border = "solid";
        document.getElementById('rep').style.background = "pink";
        document.getElementById('rep').style.display = "inline";
        document.getElementById('rep').style.padding = "10px";
        document.getElementById('reste').style.display = "none"
    }
    if (essais < 0)
    {
        document.getElementById('reste').innerHTML = "Vous n'avez plus d'essais. Vous avez perdu.";
        document.getElementById('envoie').style.display = "none";
    }
});

document.getElementById('rejouer').addEventListener('click', function() {

    nombreAleatoire = Math.random()*100;
    nombreAleatoire = Math.round(nombreAleatoire);
    essais = 10;
    choixUtilisateur = 0;
    document.getElementById('envoie').style.display = "inline";
    document.getElementById('rep').innerHTML = "Nouvel essai.";
    document.getElementById('reste').innerHTML = " Bonne chance.";
    document.getElementById('rep').style.color = "black";
    document.getElementById('rep').style.border = "none";
    document.getElementById('rep').style.background = "none";
    document.getElementById('reste').style.display = "block";
    document.getElementById('reste').style.marginTop = "15px"
});