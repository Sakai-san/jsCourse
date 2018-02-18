# Chapitre 4 : Condition

## Concept
On peut soumettre l'exécution d'une portion de code à une condition.

```js
var isWoman = true;

if( isWoman === true ){
	console.log('you are a woman.');
}
else{
	console.log('you are a man.');
}
```

La condition dans le `if` est soit **vraie** ou soit **fausse**. On appelle cela une **expression booléenne**.

Dans l'exemple, `isWoman` vaut `true`. Donc le code dans le `if` sera executé.

On peut aussi avoir plusieurs cas.

```js
var age = 16;

if( age <= 12 ){
	console.log('you are 12 years old and under.');
}

else if( age < 18 ){
	console.log('you are older than 12 years old but less than 18 years old.');
}

else{
	console.log('you are 18 years old and more.');
}
```
Dans le second exemple, la condition dans le `if` n'est pas remplie. On poursuit et on arrive dans la condition dans le `else if`, qui elle, est remplie, car `16 < 18` est vrai, donc vaut `true` et, par conséquent, le code à l'intérieur du `else if` est exécuté.



# Opérateurs de comparaison
`>` plus grand que

`10 > 99 // false`


`>=` plus grand ou égal

`10 >= 10 // true`


`==` égal, seule la **valeur** doit être identique

`1 == '1' // true`


`===` est égal à, **valeur** et **type** doivent être identique

`1 === '1' // false`


`!=` est différent de, seule la **valeur** et **type** doivent être différents

`1 != '1' // false`


`!==` est différent de, **valeur** et **type** doivent être différents

`1 !== '1' // true`


`<` plus petit que

`'a' < 'b' // true`


`<=` plus petit que

`'c' <= 'c' // true`


# Opérateurs logiques
OU : `||`,  vrai dès qu'une des opérandes est vraie

```js
var age = 40;
var isWoman = false;
if( age >= 20 || isWoman ){ // true
	console.log("Is a woman or is 20 years old and more.");
}
```

ET : `&&`, vraie si toutes les opérantes sont vraies

```js
var age = 40;
var isWoman = false;
if( age >= 20 && isWoman ){ // false
	console.log("Is a woman and is 20 years old and more.");
}
```

NOT : `!`, renverse la valeur booléene

```js
var age = 40;
var isWoman = false;
if( age >= 20 && !isWoman ){ // true
	console.log("Is a woman and is 20 years old and more.");
}
```

## Précédence
Comme en mathématique, les opérateurs mathématiques, relationnels et logiques répondent à un ordre.

Par exemple, en mathématique l'opération de multiplication a priorité sur l'addition `3 + 5*6 = 33`.

En programmation, la priorité se fait selon l'ordre suivant :

opérateur mathématique
	*, /
	+, -
opérateur relationnel
	< , <=, >, >=
	==, !=
opérateur logique
	&&
	||

Pour une liste exhaustive, consulter cette [page](https://en.wikipedia.org/wiki/Order_of_operations).


```js
var age = 10;
var isWoman = false;
var isOld = false;
if( age+9 >= 20 && !isWoman || isOld ){ // false
	// do something
}
```

Cela équivaut au code suivant. On a évidemment pas besoin des parenthèses, vu la précédence :

```js
var age = 10;
var isWoman = false;
var isOld = false;
if( (((age+9) >= 20) && !isWoman) || isOld ){ // false
	// do something
}
```



## Récapitulation
La condition dans un `if` est une **expression booléene**. Cela signifie que cette expression est soit vraie (`true`) soit fausse (`false`). Si l'expression est vraie alors le code compris à l'intérieur du `if` sera exécuté. Si l'expression est fausse on peut éventuellement (pas obligatoire) prévoir un traitement pour cette possibilité à l'intérieur d'un `else`.

Le OU logique et le ET logique permet de construire une expresssion booléene composée de plusieurs autres expressions booléenes. Le NOT logique, soit la négation, **renverse** une valeur d'une expresssion booléene.

Les opérateurs obéissent à un ordre, appelée la précédence, à savoir, dans un premier temps, en fonction du type d'opérateur : mathématique, relationnel et logique.
A l'intérieur de chacune d'elle, il y a encore une hiérarchie propre, par exemple en mathématique la multiplication passe avant l'addition. Le ET logique à la priorité sur le OU logique en logique.