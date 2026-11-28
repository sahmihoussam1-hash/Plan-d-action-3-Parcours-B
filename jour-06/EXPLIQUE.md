# Jour 6 : Ajouter et supprimer 

## Pourquoi un seul ecouteur sur la <ul> suffit pour tous les boutons ?
Quand je clique sur un bouton <<supprimer>>, l evenementclick remonte du bouton vers le <li>, puis vers la <ul>. c le bouillonnement.
La <ul> recoit donc les clics de tous ses boutons. Avec event.target, je sais quel element a ete clique, et avec event.target.dataset.id, je sais quel article supprimer.

Cela marche aussi pour les nouveaux boutons, car l'ecouteur est pose sur la <ul> et pas sur les boutons. La fonction render recree les <li>, mais la <ul> reste le meme et garde son ecouteur.
