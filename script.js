var nombreAleatoire = Math.random()*100;
nombreAleatoire = Math.round(nombreAleatoire);

var essais = 1;

var choixUtilisateur = 0;

document.getElementById('envoie').addEventListener('click', function () {

    choixUtilisateur = document.getElementById('proposition').value;

    if (nombreAleatoire < choixUtilisateur)
    {
        alert('Le chiffre choisi est trop grand');
        essais = essais + 1;
        choixUtilisateur = document.getElementById('proposition').value;
    }
    if (nombreAleatoire > choixUtilisateur)
    {
        alert('Le chiffre choisi est trop petit');
        essais = essais + 1;
        choixUtilisateur = document.getElementById('proposition').value;
    }
    if (nombreAleatoire === choixUtilisateur)
    {
        alert('gagné')
    }
    if (essais === 10)
    {
        alert('fin')
    }
});
