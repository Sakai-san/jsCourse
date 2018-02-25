# Chapitre 4 : Opérateurs

Nous avons vu préalablement qu'une variable a un **type** et qu'en fonction de ce type, on peut faire différentes **opérations** sur celle-ci.

Nous allons d'abord classer les différents opérateurs en catégorie, et après voir comment les règles de prioriété sont définies.

# Opérateurs arithmétiques
Ces opérateurs viennent du monde mathématique. Les plus utilisés sont les suivants :
* `+` addition

	`1 + 8 // 9`

* `-` soustraction

	`1 - 10 // -9`


* `/` division

	`9 / 4 // 2.25`

* `*` multiplication

	`4 * 2.25 // 9`


# Opérateurs relationnels
* `>` plus grand que

	`10 > 99 // false`


* `>=` plus grand ou égal

	`10 >= 10 // true`


* `==` égal, seule la **valeur** est identique

	`1 == '1' // true`


* `===` est égal à, **valeur** et **type** sont identiques

	`1 === '1' // false`


* `!=` est différent de, la **valeur** est différente

	`1 != '1' // false`


* `!==` est différent de, **valeur** ou **type** sont différents

	`1 !== '1' // true`


* `<` plus petit que

	`'a' < 'b' // true`


* `<=` plus petit que

	`'c' <= 'c' // true`


# Opérateurs logiques
OU : `||`,  vrai dès qu'une des opérandes est vraie.

```js
var isWoman = false;
var age = 40;
var isWomanOrIsOver25 = isWoman || age > 25; // true
```

ET : `&&`, vraie quand toutes les opérandes sont vraies.

```js
var isWoman = false;
var age = 40;
var isWomanAndIsOver25 = isWoman && age > 25; // false
```

NOT : `!`, renverse la valeur booléene.

```js
var isWoman = false;
var age = 40;
var isManAndIsOver25 = !isWoman && age > 25; // true
```

# Précédence
Comme en mathématique, les opérateurs utilisé en programmation, répondent à un ordre appelé la précédence.

En programmation, la priorité se fait selon l'ordre suivant :

* opérateur loqique
	* `!`
* opérateur mathématique
	* `*`, `/`
	* `+`, `-`
* opérateur relationnel
	* `<` , `<=`, `>`, `>=`
	* `==`, `!=`
* opérateur logique
	* `&&`
	* `||`

A l'intérieur de chaque catégorie, il a encore une hirarchie interne. Par example, l'opération de multiplication a priorité sur l'addition `3 + 5*6 = 33`.

Pour une liste exhaustive, consulter cette [page](https://en.wikipedia.org/wiki/Order_of_operations).


```js
var age = 10;
var isWoman = false;
var isOld = false;
var booleanExample = age+9 >= 20 && !isWoman || isOld; // false
```

Cela équivaut au code suivant. On a évidemment pas besoin des parenthèses, vu la précédence :

```js
var age = 10;
var isWoman = false;
var isOld = false;
var booleanExample = (((age+9) >= 20) && (!isWoman)) || isOld; // false
```

# Récapitulation
Les **opérateurs** obéissent à un ordre, appelée la **précédence**. Dans une instruction qui comporte plusieurs opérateurs de catégéories différentes, on peut classer par ordre d'importance : les opérateurs **arithmétique**, **relationnel** et finalement **logique**. La seule exception et le `!` qui est la priorité sur tous.

A l'intérieur de chacune d'elle, il y a encore une hiérarchie propre, par exemple, en arithmétique, la multiplication passe avant l'addition. La prioriété interne des opérateurs arithmétiques vient en fait des règles de l'arithmétique. Autre exempl, en logique, le `&&` à la priorité sur le `||`.

Il est conseillé d'utiliser `===` ainsi qe `!==` qui tiennent compte du type en plus de la valeur, contrairement à `==` et `!=` qui tiennent compte que de la valeur uniquement.
