# Chapitre 2 : Variable

## Concept

Une variable est une **information** stockée dans la mémoire de l'ordinateur. Chaque variable a un **identifiant** et une **valeur**. L'identifiant permet que l'information puisse être réutilisée plus tard dans le programme.


```
var age = 10;
var firstName = 'thomas';
var lastName = 'Sakai';
var fullName = firstName + ' ' + lastName;
console.log( fullName );

```

Dans le petit script ci-haut 4 variables ont été **déclarées**. La variable appelée `age` cotient la valeur `10`. Le symbole `=` signifie **assignation**. Ainsi, on a assigné `10` à la variable qui s'appellé `age`.

La variable `fullName` utilise les c. Dans la dernière ligne on a appelé la fonction `console.log()` pour afficher la valeur de la variable `fullName`.

## Types de données
En JS, il existe sept types de données `number`, `string`, `boolean`, `null`, `undefined`, `object` et `symbol`.

On peut connaître le type d'une variable avec le fonction ` typeof()`.

```js
var firstName = 'Asako';
typeof(firstName);
```

## Opérations

En fonction du type des varaibles on peut faire difféntes opérations sur celles-ci.

```
var year = 2018;
var birthYear = 1992;
var age = year-birthYear;
var fullName = 'toma' + ""
console.log( age );

```
En peut faire des opérations arithmétique sur les varialbes de type `number`, tels que `/`, `*`, `-`, `+`. On peut assembler deux chaîne de charactères (concaténation).


## Système d'exploitation

Le système d'exploitation de l'ordinateur gère les programmes en cours d'exécution (appelé processus). Il leur alloue un certain temps d'exécution, qu'on appelle le quantum. Il décide quel programme va pouvoir être exécuté et ainsi avoir accès au processeur (processus élu) grâce à un algorithme mis en oeuvre par l'ordonnanceur (scheduler).

Les variables qu'un programme déclare sont stockée dans la mémoire vive (RAM) de l'ordinateur. Si l'ordinateur n'a momentanément plus de place disponible en RAM, les variables seront stockées sur le disque (lent), par une méthode applée mémoire virtuelle, qui sera organisée par le système d'exploitation.

Le système d'exploitation fait le lien entre le matériel (hardware) et les applications installées sur l'ordinateur.

## Recapitulation

Déclaration de varible et stockage en mémoire.
