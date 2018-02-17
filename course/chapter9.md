# Chapitre 9 : Valeur vs Reference

## Concept

```js
var chrisAge = 46;
var tomaAge = chrisAge;
console.log( chrisAge === tomaAge ); // true, type AND value are same
chrisAge++;
console.log(chrisAge); // 47
console.log(tomaAge); // 46
```

```js
var st1 = {first: "toma"};
var st2 = st1;
console.log( st1 === st2 ) ; // true, type AND value (reference) are same
st1.first = 'samuel';
console.log( st1.first ); // samuel
console.log( st2.first ); // samuel

```

Dans le premier exemple, les deux variables sont physiquement (dans la mémoire de l'ordinateur) stockées à des endroits différents, ce qui n'est pas le cas pour le second exemple.
