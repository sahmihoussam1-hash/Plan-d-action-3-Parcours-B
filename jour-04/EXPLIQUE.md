3
# Jour 4 : Afficher dans la page 

- render vide la liste (textContent = "") avant de la redessiner, sinon les articles de l'appel precedent restent et s'accumulent.  
- J'utilise textContent et pas innerHTML : textContent affiche le texte tel quel, alors que innerHTMl interprete le HTML,donc un titre contenant une balise pourrait etre execute.
- Le reduce du stock s'applique a liste affichee, donc le total change quand on filtre.
