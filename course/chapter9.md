# Chapitre 9 : Hoisting

## Concept

Le hoisting est un comportement de l'interpréteur JS qui peut amener à certaines incompréhensions au niveau de la portée.

```js
var students = [ {first: 'Toma', grades: [3.5, 2.0]}, {first: 'Alfredo', grades: [5, 5.5, 6.0]}, {first: 'Michael', grades: [4.5, 5.0, 4.5]}];
if ( students.length > 10){
  var message = "many student";
}
console.log(message); // undefined

```
JS en réalité fait cela :

```js
var message;
var students = [ {first: 'Toma', grades: [3.5, 2.0]}, {first: 'Alfredo', grades: [5, 5.5, 6.0]}, {first: 'Michael', grades: [4.5, 5.0, 4.5]}];
if ( students.length > 10){
  message = "many student";
}
```
ce qui pose des problemes de portée et de performances.
