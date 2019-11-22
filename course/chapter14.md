# Chapitre 14 : Asynchronisme

## Concept

Pour certaines opérations qui prennent un peu de temps (requête HTTP, écriture dans un fichier, etc.), JS ne va pas attendre que l'opération soit terminée et continue l'exécution du programme. Ce comportement s'appelle **asynchrone**.

```js
var students = [ {first: 'Toma', grades: [3.5, 2.0]}, {first: 'Alfredo', grades: [5, 5.5, 6.0]}, {first: 'Michael', grades: [4.5, 5.0, 4.5]}];
students.forEach( function(student, index){
  setTimeout( function(){
    console.log( student.first + ' has a ' + student.grades.length + " grades." );
  }, 10000*index);
});
console.log("The number of grades of each student.");
/*
  The number of grades of each student.
  Toma has a 2 grades.
  Alfredo has a 3 grades. (about 10 seconds later)
  Michael has a 3 grades. (about 20 seconds later)
*/

```
Dans cet exemple, la fonction `setTimeout` est asynchrone, et donc la dernière instruction de l'extrait de code est exécutée en premier. L'avantage de l'asynchronisme est de pouvoir lancer plusieurs tâches **en parallèle**.

L'asynchronisme est mis en oeuvre par des événements. Dès qu'une tâche s'est terminée un événement survient et la callback est appelée.
