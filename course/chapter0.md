# Avant-propos

## Vue d'ensemble

JavaScript est un language de programmation crée en 1995. Initialement crée pour faire de petite interaction avec l'utilisateur d'un client web, communément appelé navigateur, il est devenu un language généraliste. [Githut](http://githut.info/), [Stack Overflow](https://insights.stackoverflow.com/survey/2017) le classait comme le lanague le plus populaire en 2017.

Ce cours traite les concepts de base ainsi que des concepts plus spécifiques tel que le prototype, le callback, le hoisting, le spread, le destructuring, les closures, etc.

## Audience
Ce cours s’adresse essentiellement aux étudiants et étudiantes qui débutent avec JavaScript.
Les développeurs/développeuses ayant déjà une expérience en JavaScript désirant rafraîchir leur connaissance ou
approfondir certains points peuvent également y trouver leur compte.

## Pré-requis
Aucun.

## Objectifs
Ce cours a pour objectif un apprentissage rapide et orienté vers la pratique. En effet, d’une
part, la théorie est concise et illustrée par des exemples. D’autre part, le cours est accompagné
d’exerices [en ligne](www.studybyyourself.com) permettant de valider l’acquisition des concepts.

## Auteur
Toma a obtenu un BSc en computer science et un MSc en systèmes d’information. Durant
son master à HEC Lausanne, il a occupé un poste d’étudiant-assistant. Dans cette activité il a encadré des étudiants dans le cadre d’enseignements relatifs aux bases de données et à la programmation. Il a ensuite travaillé
comme software ingénieur dans diverses institutions au Japon (Université des Nations Unies,
Université de Tokyo).

## Mention
Dans quelques explications techniques, des noms ont été écrits au masculin uniquement. Le
présent cours étant principalement destiné à des apprenants et apprenantes il en a été décidé
ainsi uniquement dans un souci de lisibilité et de simplicité.

## Chapitres
* Environment
* Variable
* tableau
* objet littéral
* condition
* condition (avancé)
* object littéral
* Prototype
* Lambda function
* Callback
* Asynchrone
* Hoisting
* Contexte *this*
* Closure
* Héritage (1 niveau)
* Héritage (2 niveaux)
* Promesses


# Concepts utilisés en JS


* Type de données
* Lambda function
* Callback
* Asynchrone
* Hoisting
* Contexte *this*
* Closure
* Héritage (1 niveau)
* Héritage (2 niveaux)
* Promesses (aparte)

## Ressources
* API, tutoriel, polyfill, exemples, etc. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
* Babel : Vous pouvez écrire du ECMAScript 2015 et voir son correspond en JS classique avec [Babel](https://babeljs.io/)
* [Standard ECMAScript](http://www.ecma-international.org/)
* Fonctionnement du [moteur JS](http://latentflip.com/loupe)
* [Eloquent JavaScript](http://eloquentjavascript.net/)
* [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
* [JavaScript The Definitive Guide, 4th Edition](http://docstore.mik.ua/orelly/webprog/jscript/index.htm)
* [JavaScript The Good part](http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf
* [JavaScript for kids](http://scuolamaputo.org/wp-content/uploads/2016/05/jsfkids.pdf)
* [Eric Elliot practices in JS](https://github.com/ericelliott/class-free-javascript-style)




```js
var tomaStudent = {first: 'Toma', last: 'Sakai', grades: [3.5, 2.0]};
```
Si l'on fait `console.dir(tomaStudent)`, on voit cet objet contient une propriété `__proto__`. Cette propriété est une **propriété spéciale** que tous les types de données possèdent. Il s'agit en fait d'un objet appelé le **prototype**. `tomaStudent` hérite des propriétés de cet objet.

## anonymous function
Une [fonction lambda](https://en.wikipedia.org/wiki/Anonymous_function) est, comme son nom l'indique, une fonction qui n'a pas de nom. On l'appelle aussi parfois fonction anonyme.

```js
// lambda function definition
var greetings = function(first, last){return 'Hello, '+ first + ' ' + last};

```
Définition et appel d'une fonction anonyme.
```js
console.log(
  ( function(first, last){ return 'Hello, '+ first + ' ' + last} )('Toma', 'Sakai');
);
// Hello, Toma Sakai
```












## Héritage sur deux niveaux
On a vu que chaque objet a une propriété appelée prototype qui est un objet hérité. Cet objet peut lui même hériter des propriétés d'un autre objet (prototype chain).

```js
  var person = {
    whoIAm : function(){
      console.log( "I am "+ this.first + " " + this.last );
    }
  };
  var student = {
    getBestGrade : function(){ return Math.max( ...this.grades);} // ... is the so-called spread operator
  };
  var tomaStudent = {
    first: "Toma",
    last: "Sakai",
    grades: [4.5, 5, 4]
  };
  tomaStudent.__proto__ = student;
  tomaStudent.__proto__.__proto__ = person;

  // same thing about masaru but cleaner
  var stud = Object.create( person ); // prototypal inheritance
  stud.getBestGrade = function(){ return Math.max( ...this.grades);};
  var masaStudent = Object.create( stud ); // prototypal inheritance
  masaStudent.first = "Masaru";
  masaStudent.last = "Segawa";
  masaStudent.grades = [3.5, 4, 4];
  console.log( masaStudent.getBestGrade() );
  console.log( masaStudent.whoIAm() );


  ```
  On peut **rédéfinir** (overriding) une fonction en définissant une fonction **propre** du même nom, sur un objet donné.
  ```js
  tomaStudent.getBestGrade = function(){ return 6.0; }; //override - cheating !!!
  console.log( tomaStudent.getBestGrade() ); // 6.0
  ```
  Remarque. Dans les exemples nous avons modifié le prototype avec `__proto__` pour mieux visualiser le truc. Il existe une autre manière (recommandée) pour ce faire avec `Object.create()`.

## Currying

Le currying est une technique permettant de transformer une fonction prenant n parametres en une fonction prenant une nombre différent de parametres.

Exemple :

```js
function greetings( first, last ){
  console.log( "Hello " + first + " " + last );
}

var students = [ {first: 'Toma', last: 'Sakai'}, {first: 'Alfredo', last: 'Castillo'}, {first: 'Michael', last: 'Scettino'}];

function hello(student){
  return greetings( student.first, student.last);
}

students.map( hello );

```

Le currying peut est aussi utile pour composer des functions (comme en mathématiques).

Exemple :

```js
function double(x){return 2*x;}
function square(x){ return x*x;}

function compose (function1, function2){
	return function(x){
		return function1(function2(x));
	};
}
 										// 2 *x * x
console.log( "compose ", compose(double, square)(2) );
```

# ECMAScript 2015

Nous utiliserons dans ce tutoriel [ECMAScript 2015](http://es6-features.org/) (anciennement appelé EC6). ECMAScript 2015 n'est pas encore [supporté](http://kangax.github.io/compat-table/es6/) par tous les navigateurs.

Nous utiliserons [Babel](https://babeljs.io/) pour assurer la compatibilité. Babel convertit ECMAScript 2015 en du JS classique, procédé qui s'appelle la transpilation. Pour votre information sachez qu'il existe d'autres transpileurs, par exemple [Tracer](https://github.com/google/traceur-compiler) de Google.

ECMAScript 2015 apporte un lot de nouveautés. Nous en verrons que quelques-unes.

## Fonctions fléchées (Arrow functions)
ECMAScript 2015 permet une manière plus condensée pour écrire des fonctions. Avec cette syntaxe ```function``` est remplacé par ```()```. On peut aussi omettre le ```return``` si la fonction n'a q'une seule instruction (il faut enlever les accolades).

```js
var students = [ {first: 'Toma', grades: [3.5, 2.0]}, {first: 'Alfredo', grades: [5, 5.5, 6.0]}, {first: 'Michael', grades: [4.5, 5.0, 4.5]}];

var gradesQuantity1 = students.map( (student) =>{
  var grades = student.grades;
  return grades.length;
});
// simpler
var gradesQuantity2 = students.map( (student) => student.grades.length );
console.log(gradesQuantity1);
console.log(gradesQuantity2);
// [2, 3, 3]
// [2, 3, 3]
```

## Classes

Cette syntaxe a été ajoutée pour similer les languages qui implémente le concept de classe tel que Java. Elle a suscité quelques controverses car nativement JS ne supporte pas les classes mais utilise le concept de prototype. Il s'agit que d'une simulation ou en d'autres termes, d'un sucre syntaxique. L'héritage par prototype existe toujours.


```js
class Person {
  constructor(first, last){
    this.first = first;
    this.last = last;
  }
  greeting(){
    console.log(`Hello, ${this.first} ${this.last}`)
  }
}

class Student extends Person {

  constructor(first, last, grades){
    super(first, last);
    this.grades = grades;
    this.updateCount();
  }

  getBestGrade(){
    return Math.max( ...this.grades);
  }

  updateCount(){
    this.studentsCount++;
  }
}

var masaru = new Student( 'Masaru', 'Segawa', [3.5, 4, 4] );
var toma = new Student(  'Toma', 'Sakai', [4, 5, 5] );

```

## template litteral (interpolation)

`id=${picId}`

## Destructuring

Permet d'eclater un object ou un tableau et le mettre dans des nouvelle variables (pattern matching).

simple :

```const { first, last } = tomaStudent; // destructuring ```

paramètre d'une function :

```js
const greetings = function( {first, last} ){
    console.log(`Hello ${first}, ${last}`);
};

```

```js
const tomaStudent = {
  first: "Toma",
  last: "Sakai",
  grades: [4.5, 5, 4]
};

console.log('testtest', greetings(tomaStudent));
```

## Spread
```js
const tomaStudent = {
  first: "Toma",
  last: "Sakai",
  grades: [4.5, 5, 4],
};
const newTomaSudent = ...tomaStudent; // spread
// newTomaSudent !== tomaSudent returns true
```

## Object rest/spread properties
On peut copier des objects et les surcharger en même temps

```js
const extendedTomaStudent = { ...tomaStudent, grades: [...tomaStudent.grades, 6], age : '38' };
// create a new object and the original object by adding grade and a new property

console.log('initStore', miniStore);
console.log('initStore', miniStoreReducer(miniStore, { message  : "message3"} ) );
```

## computed propert

	key d'un objet en tant que variable.

## Resources
babel
https://www.youtube.com/watch?v=G84DyiXG_Wc
