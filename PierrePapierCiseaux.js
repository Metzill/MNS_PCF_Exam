const P = "Pierre";
const F = "Feuille";
const C = "Ciseaux";
var scoreJ = 0;
var scoreO = 0;

const coups = [P, F, C];

function joueCoupAleatoire() {
    return parseInt(Math.random() * coups.length);
}

console.log(joueCoupAleatoire());

/**
 * 0 - 2 = -2 = P v C = V
 * 1 - 0 = 1 = F v P = V
 * 2 - 1 = 1 = C v F = V
 * 1 - 2 = -1 = F v C = D
 * 2 - 0 = 2 = C v P = D
 * 0 - 1 = -1 = P v F = D
 * 2 - 2 = 0 = 0 = C v C = T
 * 0 - 0 = 0 = P v P = T
 * 1 - 1 = 0 = F v F = T
**/
while(scoreJ < 3 || scoreO < 3) {
    var coupO = joueCoupAleatoire();
    var coupJ = prompt("Saisissez votre coup : (0 = Pierre, 1 = Feuille, 2 = Ciseaux");
    var manche = coupJ - coupO;
    if(manche === 0 ) {
        console.log("Joueur :"+scoreJ+" | Ordinateur :"+scoreO);
        console.log("Egalité");
        console.log("Pas de point gagné");
    } else if (manche === 1 || manche === -2){
        console.log("Joueur :"+scoreJ+" | Ordinateur :"+scoreO);
        console.log("Point gagné par le joueur");
        scoreJ++;
    } else {
        console.log("Joueur :"+scoreJ+" --- Ordinateur :"+scoreO);
        console.log("Point gagné par l'ordinateur");
        scoreO++;
    }
}
if(scoreJ>scoreO) {
    console.log("Victoire !");
}else {
    console.log("Défaite...");
}
