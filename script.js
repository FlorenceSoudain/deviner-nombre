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
        document.getElementById('rep').innerHTML = "Félicitation. Vous avez gagné !  ";
        document.getElementById('rep').style.color = "red";
        document.getElementById('rep').style.display = "inline";
        document.getElementById('rep').style.fontFamily = "'Great Vibes', cursive";
        document.getElementById('rep').style.fontSize = "3em";
        document.getElementById('rep').style.display = "flex";
        document.getElementById('rep').style.justifyContent = "center";
        document.getElementById('reste').style.display = "none";
        document.getElementById('cacher').style.display = "none";
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
    essais = 9;
    choixUtilisateur = 0;
    document.getElementById('envoie').style.display = "inline";
    document.getElementById('rep').innerHTML = "";
    document.getElementById('reste').innerHTML = "";
    document.getElementById('rep').style.color = "";
    document.getElementById('reste').style.marginTop = "10px";
    document.getElementById('rep').style.fontFamily = "verdana, sans-serif";
    document.getElementById('rep').style.fontSize = "";
    document.getElementById('reste').style.display = "";
    document.getElementById('cacher').style.display = "";
});