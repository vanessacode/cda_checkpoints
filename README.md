# Checkpoint alternance dev CDA
Les exercices sont indépendants les uns des autres.
Il vaut mieux livrer un exercice incomplet et/ou comportant des bugs plutôt que de ne rien soumettre.

## Partie 1 : frontend
Avant de commencer, crée un nouveau repo et clone ton projet en local. À chaque fois que tu avances dans une fonctionnalité :
  ● Fais un commit avec un message explicite
  ● Fais un push
  
Crée un nouveau projet React Typescript avec Create React App. Tu vas utiliser une API GraphQL qui fournit des informations sur un pays : https://countries.nausicaa.wilders.dev/
La query continents fournit une liste de continents avec un code et un nom (ex : {code:"EU", name:"Europe"})
La query continent prend un code de continent en paramètre et retourne une liste de pays. La query country prend un code de pays en paramètre et retourne le nom, la capitale, la
monnaie et le drapeau du pays.

Pour réaliser ce projet, tu peux si tu le souhaites utiliser https://reactrouter.com/en/main pour la
gestion des routes en local ainsi que la biliothèque de composants https://ant.design/

Tu vas devoir développer 3 pages dans ce projet :
  ● Une page qui affiche la liste des liens vers chaque continent :
https://i.imgur.com/X2LR3Z3.png
  ● Une page qui affiche, pour un continent donné, la liste des liens vers chaque pays :
https://i.imgur.com/VDsWKj7.png
  ● Une page qui affiche les détails d'un pays donné :
https://i.imgur.com/5C4iPKB.png

Bonus : les pages affichant une liste contiennent un champ de texte permettant de filtrer les éléments : https://i.imgur.com/i9f2Sau.png
