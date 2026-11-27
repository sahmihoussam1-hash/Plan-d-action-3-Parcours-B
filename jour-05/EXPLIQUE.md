# Jour 5 : Les evenements 

- Ce que fait mon code : mettreAJour()lit les trois champs (recherche, categorie, tri), appelle appliquerFiltres puis render. Comme elle lit les trois champs a chaque fois, les criteres se combinent.- Les evenements : j'ecoute input sur la recherche (a chaque lettre tapee) et change sur les deux select (quand on choisit une option).
- Le button Reinitialiser remet les champs a leur valeur de depart puis appelle mettreAJour().
- addEventListener recoit la fonction sans parentheses : avec mettreAJour(), elle s'executerait tout de suite au lieu d'attendre l'evenement.
- Blocage : la page restait vide a cause de l'erreur "butonReset is not defined". Une variable doit etre declaree avec const avant d'etre utilisee, et une erreur sur une ligne arrete tout le reste du fichier, donc mettreAjour() final ne s'executait pas. J'ai aussi corrige champTri = "prix-asc" en champTri.value = "prix-asc".
jai appris : lire l'erreur dans le console (F12) donne le nom de la variable et le numero de ligne, ce qui permet de trouver le probleme vite.
