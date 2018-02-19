# Chapitre 16 : Héritage prototypal

## Concept


L'héritage prototypal est une des particulartiés de JS la mal plus comprise. L'héritage prototypal est différent de l'héritage classique implémenté en Java ou C++. En JS, le concept de classe n'existe pas.

Prenons deux objets.
```js
var tomaStudent = {
  first: "Toma",
  last: "Sakai",
  grades: [4.5, 5, 4],
  getBestGrade: function(){ return Math.max( ...this.grades);}
};

var masaruStudent = {
  first: "Masaru",
  last: "Segawa",
  grades: [3.5, 4, 4],
  getBestGrade: function(){ return Math.max( ...this.grades);}
};
```
L'idée de l'héritage en général est de ne pas avoir du code dupliqué. De notre cas, la fonction `getBestGrade` se trouve dans deux objets différents, ce qui n'est pas une bonne pratique. En effet, d'une part un code dupliqué est difficile à maintenir, et, d'autre il prend de la place en mémoire inutilement.

Créons un objet qui contient ladite fonction.

```js
var student = {
  studentsCount: 0;
  getBestGrade: function(){ return Math.max( ...this.grades);}
}

var tomaStudent = {
  first: "Toma",
  last: "Sakai",
  grades: [4.5, 5, 4]
};
tomaStudent.__proto__ = student; // don't do that, just for the example
tomaStudent.__proto__.studentsCount = tomaStudent.__proto__.studentsCount+1;

var masaruStudent = {
  first: "Masaru",
  last: "Segawa",
  grades: [3.5, 4, 4]
};
masaruStudent.__proto__ = student; // don't do that, just for the example
tomaStudent.__proto__.studentsCount = tomaStudent.__proto__.studentsCount+1;

console.log(tomaStudent.__proto__.studentsCount); // 2
console.log(masaruStudent.__proto__.studentsCount); // 2
```

En JS, **chaque variable** possède une proprité appelé __proto__. Sa valeur est un **objet**. `tomaStudent` et `masaruStudent` partage le **même objet** `student`. Il s'agit d'une [référence](https://en.wikipedia.org/wiki/Reference_(computer_science) sur cet objet pour être précis. Les objets héritent des propriétés de cet objet. On appelle cela héritage par prototype.

Evidemment, lrosque l'on mofifie une propriété de l'objet dans le __proto__ cela impacte tous les objets qui en hérite par prototype. studentsCount Le seul problème avec c'est ici qu'on a des objets hardcodé dans notre code. Or, on veut en pour général crée des objects divers en cours de l'application (dynamique). On fera cela à l'aide d'un constructeur :

```js
var Student = function( first, last, grades ){
      this.first = first;
      this.last = last;
      this.grades = grades;
      Student.prototype.studentsCount++;
};

Student.prototype.getBestGrade = function(){
  return Math.max( ...this.grades);
};

Student.prototype.studentsCount = 0;


var tomaStudent = new Student('Toma', 'Sakai', [4.5, 5, 4] );
var masaruStudent = new Student('Masaru', 'Segawa', [3.5, 4, 4] );

console.log(tomaStudent.__proto__.studentsCount); // 2
console.log(masaruStudent.__proto__.studentsCount); // 2

```
