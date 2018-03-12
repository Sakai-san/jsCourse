# Chapitre 7 : Fonction

La fonction en programmtion est un concept proche de la fonction en mathématique : on donne des **inputs**, la fonction fait un **traitement** dépendant de ceux-ci et finalement donne un **résultat**.

Une fonction est un donc une formule générale permettant de résoudre un problème donné.

Une fonction isole une portion de code, permettant de pouvoir **réutiliser** ou **partager** ce code.

## Définition d'une fonction

Définissons une fonction qui calcule l'age d'une personne. Or, pour cela, on aura besoin de la date de naissance de la personne. Cette information est l'input ou le **paramètre** de la fonction.

```js
function getAge(birthDate){
    var now = new Date();
    return now.getFullYear() - new Date(birthDate).getFullYear();
}
```
Ce qui caractérise la fonction ci-dessus :
1. Elle a un **nom** : `getAge`
2. Elle prend un un **paramètre** : `birthDate`.
3. Après avoir avoir fait un traitement, la fonction **retourne** un résultat, appelé, l'**output**, en l'occurence l'âge d'une personne.

Les instructions qui sont entre les accolades `{}` font partie de ce qu'on appelle le **corps** de la fonction.


## Appel de fonction
Une fois que la fonction a été définie, on veut utilier cette dernière avec des vraies données.

```js
var tomaAge = getAge('1979-04-22');
console.log( tomaAge ); // 39
```

## Fonction anonyme
Une fonction anonyme est une fonction qui n'a pas d'identifiant, donc pas de nom.


```js
var getAge = function(birthDate){
    var now = new Date();
    return now.getFullYear() - new Date(birthDate).getFullYear();
};
console.log( getAge('1979-04-22') ); // 39
```

Dans le code ci-dessus, une **fonction anonyme** est assignée à la variable `getAge`. Ensuite, on appelle la fonction en utilisant la variable directement. Les fonctions anonymes sont souvent utilisées dans les callbacks. Nous en parlerons dans un chapitre dédié.

## Fonctions anonymes auto-exécutantes (IIFE)

Les  (ou , selon) permettent donc d’isoler le code sans perturber son exécution :


## Portée
Les variables déclarées dans le corps de la fonction ne sont pas accessible à l'extérieur de celle-ci.
On dit qu'elle sont des **variables locales**, car leur **portée** (scope) est limitée à la fonction.

En revanche les variables déclarées en dehors de la fonction sont accessibles à l'intérieur. On les appelle **variables globales**.

```js
var now = new Date();

function getAge(birthDate){
    var currentYear = now.getFullYear(); // currentYear is a local variable and now a global variable
    return currentYear - new Date(birthDate).getFullYear();
}
console.log(currentYear); // error
```

## Récapitulation

Une fonction est une formule générale qui résoud un problème spécifique. Le résultat dépend des **paramètres** passés à la fonction. Une fois le traitement fait, la fonction retourne un **résultat**. La plupart des fonctions retourne un résultat, mais ce n'est pas obligatoire.

Lorsqu'une portion de code fait un traitement qui a une portée assez générale, ce code peut être isolé dans une fonction.

L'avantage d'isoler ce traitement dans une fonction est d'avoir un seul endroit dans le programme qui fait un traitement dédié. Ceci qui favorise la réutilisation et donc facilite maintenance du programme.

La définition et l'appel de fonction sont deux choses différentes. Dans la définition, doivent être écrites toutes les étapes qui menènt au résultat (algorithme), alors que l'appel de fonction, on veut utiliser la fonction avec des **vraies données**.