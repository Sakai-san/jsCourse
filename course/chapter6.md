# Chapitre 6 : Boucle

On utilise les boucles, lorsqu'on veut faire répéter une instruction plusieurs fois.

## Boucle for

```js
for(var i=0; i < 5; i++){
    console.log("Hello world "+i+"!");
}
```

Ce code logg 5 fois le message `Hello world` dans la console. En plus l'itération courante est également loggée, ce qui donne :

`Hello world 0!`

`Hello world 1!`

`Hello world 2!`

`Hello world 3!`

`Hello world 4!`

`Hello world 5!`


## Elements
Les instructions du `for` qui sont à l'intérieur des `{}` constitue le corps.

La boucle `for` comprend **trois instructions** : l'**initialisation** : `var i=0`, la **condition** : `i < 5` et l'**incrémentation** (exécuté après le corps du `for`) : `i++`.

Le coprs du for est exécuté si la condition est vraie.


## Recapitulation
Il existe plusieurs sortes de boucles en JS.

Une version qui généralise la boucle `for` est la boucle `while`. Celle-ci est utilisé dans des cas assez spécifiques (p.ex. jeux), et ne sera pas abordée dans le cours.

