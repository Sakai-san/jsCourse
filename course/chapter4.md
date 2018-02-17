# Chapitre 4 : Condition

## Concept

Une portion de code est exécutée seulement si la condition est **vraie**.

```js
var age = 8;

if( age >= 18 ) {
	console.log('your are an adult.')
}
else{
	console.log("you are still a child.")
}
```

La condition dans le `if` est soit vraie ou soit fausse. 
On appelle cela une **expression booléenne**. Dans l'exemple `age >= 18` vaut `false`. Donc le code dans le `else` sera executé.

On peut avoir plusieurs cas.

```js
var age = 16;

if( age <= 12 ) {
	console.log("your are still a child.")
}

else if( age < 18 ) {
	console.log("your are a teenage.")
}

else{
	console.log("you are an adult.")
}
```
Dans l'exemple `age >= 12` vaut `false`. On continue age<18 est vraie. Donc le code executé `console.log("your are a teenage")` .



# Opérateurs de comparaison

# Opérateurs logiques

Les opérateurs &&, || et ! sont utilisés dans les expressions booléene
|| : une des opérantes est vraie
&& : toutes les opérantes sont vraie 

## Recapitulation

Une condition est soit vraie soit fausse. On appelle cela une epxression booléene. Si la condition est vraie alors la portion de code sera exécutée.






