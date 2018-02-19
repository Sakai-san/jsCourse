# Chapitre 14 : Prototype

## Concept

Toutes les variables JS possèdent une propriété appelée `__proto__`.

```js
  const firstName = new String( 'toma' );
  console.log( firstName.__proto__ );
```

 `firstName.__proto__` est un **objet**. Cet objet contient plusieurs propriété, tel que que `toUpperCase`.

```js
  const firstName = new String( 'toma' );
  console.log( firstName.toUpperCase() ); // TOMA
```

On peut redéfinir (override) cette fonction dans notre objet comme ceci.

```js
  const firstName = new String( 'toma' );
  firstName.toUpperCase = function() { return this + " ! " ; };
  console.log( firstName.toUpperCase() ); // toma !
```

On voit maintenant que l'objet `firstName` possède une propriété directe `toUpperCase` et une propriété `toUpperCase` dans son prototype.

En JS, lorsque l'on veut accéder à une propriété, JS cherche d'abord dans l'objet et s'il ne la trouve pas dans le prototype (fallback). On peut donc rédéfinir une propriété en la définissant sur l'objet lui-même.
