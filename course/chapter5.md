# Chapitre 5 : Condition

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


## Récapitulation
La condition dans le `if` ainsi que le `else if` est une **expression booléene**. Cela signifie que cette expression est soit vraie (`true`) soit fausse (`false`). Si l'expression est vraie alors le code compris dans la condition sera exécuté. Si l'expression est fausse on peut éventuellement (pas obligatoire) prévoir un traitement pour cette possibilité à l'intérieur d'un `else`.