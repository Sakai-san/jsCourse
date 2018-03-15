# Chapitre 9 : Tableau (array)

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

## Functions natives (built-in function)
Les tableau en JS possèdent possèdent des functions qui sont offertes par le lanagues, tel que `push`, `concat`, etc.

Nous allons voir les functions filter, reduce, map qu'on utilise très souvent lorsqu'on veut parcourir un tableau.

## Recapitulation
Le type de talbeau en JS est object. En effet `typeof([1, 2])` retourne `object`.

Par convention, on nomme souvent les taleaux au pluriel, tel que `grades`. Ainsi l'on sait qu'on est en présence d'un tableau.

Les tableaux s'utilient souvent avec des boucles afin de pouvoir itérer (parcourir) sur ceux-ci.

function perform( numbers, function ){
    var numbersTransformed = []
    for( var i=0; i < numbers; i++ ){
        numbersTransformed.push( function.call( numbers[i] ) );
    }
}