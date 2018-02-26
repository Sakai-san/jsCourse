# Chapitre 7 : Fonction

La fonction en programmtion est un concept très proche de la fonction en mathématique : on donne des **inputs**, la fonction fait un **traitement** dépendant de ceux-xi et finalement donne un **résultat**.

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
3. Elle **retourne** un `nombre`, à savoir le traitement qu'on attend d'elle, le calcul de l'âge d'une personne.

Les instructions qui sont entre les acolade `{}` font partie de ce qu'on appelle le *corps* de la fonction.

## Portée
Les variables déclarées dans le corps de la fonction ne sont pas accessible à l'extérieur de celle-ci.
On dit qu'elle sont des **variables locales**, car leur **portée** (scope) est limitée à la fonction.


## Définition d'une fonction


## Appel de fonction

## fonctions anonymes auto-exécutantes (IIFE)

Les  (ou , selon) permettent donc d’isoler le code sans perturber son exécution :

## Fonction anonyme


## Récapitulation
Lorsqu'une portion de code fait un traitement qui a une portée assez générale, ce code peut être isolé dans une fonction.

L'avantage d'isoler ce traitement dans une fonction est d'avoir un seul endroit dans le programme qui fait un traitement dédié. Ceci qui favorise la réutilisation et donc facilite maintenance du programme.