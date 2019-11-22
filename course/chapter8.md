# Chapitre 8 : Objet

## Concept

Les variables que nous avons vu jusqu'ici sont assez basiques. En effet, on ne peut stocker qu'une information par variable. Un objet est un type de données avec lequel on peut stocker **plusieurs informations** sous une seule et même variable.


## Objet
Un objet est un structure de données une clé-valeur. On appelle propriété (propriété) ou champ (field) les informations que possède un objet.


```js
var tomaStudent = {
  first: "Toma",
  last: "Sakai",
  grades: [4.5, 5, 4],
  getBestGrade: function(){ return Math.max( ...this.grades);}
};
```
La variable `tomaStudent` contient un objet. Cette object contient plusieurs informations qu'on appelle des **propriétés**, en l'occurence quatre, à savoir `first`, `last`, `grades`, `getBestGrade`.


## Accès
On a accès aux valeur des propriété d'un objet à l'aide des clés.

Pour accéder à la valeur de la proriété `last` :

```js
var tomaStudent = {
  first: "Toma",
  last: "Sakai",
  grades: [4.5, 5, 4],
  getBestGrade: function(){ return Math.max( ...this.grades);}
};
console.log(tomaStudent.last); // Sakai
console.log(tomaStudent['last']); // Sakai
```

object simple
correspond au dictionnaire en python au tableau associatif ou au hash (perl).



object avec fonction

