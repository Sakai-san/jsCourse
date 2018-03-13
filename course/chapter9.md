# Chapitre 9 : Tableau

## Concept
Un tableau est une structure de données qui permet de stocker plusieurs variables.

## Tableau
On peut voir un tableau comme un boîte qui contient des cellules contigües. Chaque cellule contient un **élément**.


```js
var grades = [4, 5, 3.5, 3, 4.5];
```
La variables `grades` est un tableau qui contient 5 éléments. Ces éléments sont ici des nombres, mais un tableau peut contenir n'importe quel type de variables tel que booléean, object ou même un tableau à son tour.

## Accès
On a accès aux éléments du tableau, grâce à leur place dans le tableau, autrement dit leur **indice**. Un tableau est indicé de gauche à droite à partir de **0**.

Pour accéder au premier élément du tableau :
```js
var grades = [4, 5, 3.5, 3, 4.5];
console.log(grades[0]); // 4
```

## Parcours
Pour parcourir un tableau, on utilise une boucle.

```js
var grades = [4, 5, 3.5, 3, 4.5];

var bestGrade = null;
for( var i=0; i < grades.length; i++){
    if( grades[i] > bestGrade ){
        bestGrade = grades[i];
    }
}
console.log(bestGrade); // 5
```

## Recapitulation
Les tableaux s'utilient souvent avec des boucles afin de pouvoir itérer (parcourir) sur ceux-ci.