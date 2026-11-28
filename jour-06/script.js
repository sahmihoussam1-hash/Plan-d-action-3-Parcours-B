let articles = [
  { id: 1, titre: "Bague solitaire or 18K", categorie: "bague", prix: 4200, stock: 3, date: "2026-09-12" },
  { id: 2, titre: "Collier perles", categorie: "collier", prix: 1850, stock: 0, date: "2026-10-03" },
  { id: 3, titre: "Bracelet argent", categorie: "bracelet", prix: 650, stock: 12, date: "2026-08-21" },
  { id: 4, titre: "Bague alliance", categorie: "bague", prix: 2900, stock: 5, date: "2026-11-01" },
  { id: 5, titre: "Boucles d'oreilles émeraude", categorie: "boucles", prix: 5600, stock: 1, date: "2026-07-15" },
  { id: 6, titre: "Collier or jaune", categorie: "collier", prix: 7300, stock: 2, date: "2026-10-28" },
  { id: 7, titre: "Bracelet jonc or", categorie: "bracelet", prix: 3400, stock: 0, date: "2026-09-30" },
  { id: 8, titre: "Bague saphir", categorie: "bague", prix: 6100, stock: 0, date: "2026-11-10" },
  { id: 9, titre: "Collier main de Fatma", categorie: "collier", prix: 980, stock: 7, date: "2026-08-05" },
  { id: 10, titre: "Créoles argent", categorie: "boucles", prix: 720, stock: 9, date: "2026-10-18" }
];

function appliquerFiltres(items, options) {
    const recherche = options.q.toLowerCase();

    const resultat = items.filter(a =>
        a.titre.toLowerCase().includes(recherche) &&
        (options.categorie === "toutes" || a.categorie === options.categorie)
    );

    if (options.tri === "prix-asc") {
        resultat.sort((a, b) => a.prix - b.prix);
    } else if (options.tri === "prix-desc") {
        resultat.sort((a, b) => b.prix - a.prix);
    } else if (options.tri === "titre") {
        resultat.sort((a, b) => a.titre.localeCompare(b.titre));
    }

    return resultat;
}

function render(liste) {
    const ul = document.getElementById("liste");
    const compteur = document.getElementById("compteur");
    const valeurStock = document.getElementById("valeur-stock");

    ul.textContent = "";

    for (let i = 0; i < liste.length; i++) {
        const a = liste[i];

        let infoStock = "";
        if (a.stock === 0) {
            infoStock = "Rupture";
        } else {
            infoStock = "Stock : " + a.stock;
        }

        const li = document.createElement("li");
        li.textContent = a.titre + " - " + a.categorie + " - " + a.prix + " DH - " + infoStock + " ";

        const bouton = document.createElement("button");
        bouton.textContent = "Supprimer";
        bouton.className = "supprimer";
        bouton.dataset.id = a.id;
        li.appendChild(bouton);

        ul.appendChild(li);
    }

    if (liste.length === 0) {
        const li = document.createElement("li");
        li.textContent = "Aucun article";
        ul.appendChild(li);
    }
    compteur.textContent = liste.length + " articles";

    const total = liste.reduce((acc, a) => acc + a.prix * a.stock, 0);
    valeurStock.textContent = total + " DH";
}

const champRecherche = document.getElementById("recherche");
const champCategorie = document.getElementById("categorie");
const champTri = document.getElementById("tri");
const boutonReset = document.getElementById("reset");

function mettreAJour() {
    const options = {
        q: champRecherche.value,
        categorie: champCategorie.value,
        tri: champTri.value
    };
    render(appliquerFiltres(articles, options));
}

champRecherche.addEventListener("input", mettreAJour);
champCategorie.addEventListener("change", mettreAJour);
champTri.addEventListener("change", mettreAJour);

boutonReset.addEventListener("click", function () {
    champRecherche.value = "";
    champCategorie.value = "toutes";
    champTri.value = "prix-asc";
    mettreAJour();
});

const formulaire = document.getElementById("form-ajout");

formulaire.addEventListener("submit", function (event) {
    event.preventDefault();

    const titre = document.getElementById("nouveau-titre").value.trim();
    const categorie = document.getElementById("nouveau-categorie").value;
    const prix = Number(document.getElementById("nouveau-prix").value);
    const stock = Number(document.getElementById("nouveau-stock").value);

    const erreurTitre = document.getElementById("erreur-titre");
    const erreurPrix = document.getElementById("erreur-prix");
    erreurTitre.textContent = "";
    erreurPrix.textContent = "";

    let valide = true;

    if (titre.length < 3 || titre.length > 80) {
        erreurTitre.textContent = "Le titre doit contenir entre 3 et 80 caractères.";
        valide = false;
    }
    if (prix <= 0) {
        erreurPrix.textContent = "Le prix doit être strictement positif.";
        valide = false;
    }
    if (!valide) {
        return;
    }

    articles.push({
        id: Date.now(),
        titre: titre,
        categorie: categorie,
        prix: prix,
        stock: stock,
        date: new Date().toLocaleDateString("en-CA")
    });

    mettreAJour();
    formulaire.reset();
});

document.getElementById("liste").addEventListener("click", function (event) {
    if (!event.target.matches("button.supprimer")) {
        return;
    }
    const id = Number(event.target.dataset.id);
    articles = articles.filter(a => a.id !== id);
    mettreAJour();
});


mettreAJour();