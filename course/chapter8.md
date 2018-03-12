# Chapitre 8 : Objet

## Concept

Les variables que nous avons vu jusqu'ici sont assez basiques. En effet, on ne peut stocker qu'une information par variable. Avec les objects on peut stocker **plusieurs informations** sous une seule et même variable.


## Définition

```js
var tomaStudent = {
  first: "Toma",
  last: "Sakai",
  grades: [4.5, 5, 4],
  getBestGrade: function(){ return Math.max( ...this.grades);}
};
```
La variable `tomaStudent` contient un objet. Cette object contient plusieurs informations qu'on appelle des **propriétés**, en l'occurence quatre, à savoir `first`, `last`, `grades`, `getBestGrade`.


object simple
correspond au dictionnaire en python au tableau associatif ou au hash (perl).



object avec fonction

