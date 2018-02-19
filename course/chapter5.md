# Chapitre 5 : Opérateurs

Nous avons vu plusieurs opérateurs. Nous allons d'abord les regrouper en catégorie, et après voir comment les règles de proriété sont définies.

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
if( ((((age+9) >= 20) && (!isWoman) ) || isOld ){ // false
	// do something
}
```

## Récapitulation
Le OU logique et le ET logique permet de construire une expresssion booléene composée de plusieurs autres expressions booléenes. Le NOT logique, soit la négation, **renverse** une valeur d'une expresssion booléene.

Les opérateurs obéissent à un ordre, appelée la précédence, d'une manière générale arithmétique, relationnel et logique (sauf exception) .
A l'intérieur de chacune d'elle, il y a encore une hiérarchie propre, par exemple en mathématique la multiplication passe avant l'addition. Le ET logique à la priorité sur le OU logique en logique.

Il est conseillé d'utiliser `===` en lieu de `==` ainsi que `!==` sur `!=`.
