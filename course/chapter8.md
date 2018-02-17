# Chapitre 8 : Callback

## Concept

## Callback
Une callback est une fonction passée comme argument à une autre fonction. Les fonctions anonymes sont très souvent utilisées à ce titre.

```js
var students = [ {first: 'Toma', grades: [3.5, 2.0]}, {first: 'Alfredo', grades: [5, 5.5, 6.0]}, {first: 'Michael', grades: [4.5, 5.0, 4.5]}];
students.forEach( function(student){
	console.log( student.first + ' has a ' + student.grades.length + " grades." );
});
/* Toma has a 2 grades.
   Alfredo has a 3 grades.
   Michael has a 3 grades.
*/

```
