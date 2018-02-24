# Chapitre 3 : Variable

## Concept

Une variable est une **information** stockée dans la mémoire de l'ordinateur. Chaque variable a un **identifiant** et une **valeur**. L'identifiant permet que l'information puisse être utilisée plus tard dans le programme.


```js
var age; // declaration
age = 10; // assignation
var firstName = 'thomas'; // declaration and assignation
var lastName = 'Sakai';
var fullName = firstName + ' ' + lastName;  // declaration and assignation using existent variables
console.log(fullName); // thomas sakai

```

Dans le petit script ci-haut 4 variables ont été **déclarées**. La variable appelée `age` cotient la valeur `10`. Le symbole `=` signifie **assignation**.

La variable `age` a d'abord été déclarée. Ensuite `10` a été assigné à celle-ci. Pour les autres variables, la déclaration et l'assignation ont été faite simultanément.

La variable `fullName` utilise les variables déclarées précédemment. Dans la dernière ligne on a appelé la fonction `console.log()` pour afficher la valeur de la variable `fullName`.

## Type de données
Les variables ont un type, que l'on appelle **type de données**. En JS, il en existe sept `number`, `string`, `boolean`, `null`, `undefined`, `object` et `symbol`.

On peut connaître le type d'une variable avec l'opérateur ` typeof`.

```js
var firstName = 'Asako';
console.log(typeof firstName); // string

var isWoman = true;
console.log(typeof isWoman); // boolean

var age = 41;
console.lgo(typeof age); // number
```

## Opérations
En fonction du type des variables on peut faire difféntes opérations sur celles-ci.

```js
var currentYear = 2018;
var birthYear = 1970;
var age = currentYear-birthYear;
var fullName = 'toma is ' + age + ' years old'; // age is converted in a string by JS
console.log(fullName); // toma is 48 years old

```
En peut faire des opérations arithmétiques sur les varialbes de type `number`, tels que `/`, `*`, `-`, `+`. On peut assembler deux chaîne de charactères avec le symbol `+` (concaténation). Le type d'une variable détermine donc quelles opérations on peut faire avec elle.

Dans, certains cas JS **convertit** le type d'une variable. Dans l'exemple ci-dessus, JS ne peut pas faire une opération arithmétique, car certains opérandes ne sont pas des nombres. JS fait une **conversion de type**, ici en `string`.


## Système d'exploitation
Le **système d'exploitation** de l'ordinateur gère les applications en cours d'exécution (appelé processus). Il leur alloue un certain temps d'exécution, qu'on appelle le quantum. Il décide quel programme va pouvoir être exécuté et donc avoir accès au processeur (processus élu) grâce à un algorithme mis en oeuvre par l'ordonnanceur (scheduler).

Les variables qu'un programme déclare sont stockées dans la **mémoire vive** (RAM) de l'ordinateur. C'est le système d'exploitation également qui gère l'allocation de la mémoire pour chaque application. Si l'ordinateur n'a momentanément plus de place disponible en RAM, le système d'exploitation crée un espace sur le disque dur, appelé **mémoire virtuelle** (lent en lecture).

Le système d'exploitation fait le lien entre le matériel (hardware) et les applications lancées sur l'ordinateur.

## Recapitulation
Chaque variable a un **type**. Par exemple une variable `boolean` doit prendre la valeur `true` ou `false`, une `string` doit être une chaine de caractère, une `number` un nombre, etc.

Selon le type de la variable, la valeur doit respecter un certain **format**. Par exemple, les strings doivent être formatées entre guillemets (guillement simple ou double).

Le type d'une variable détermine également quelles **opérations** on peut faire avec celle-ci.

La déclaration d'une variable et l'assignation sont deux instructions différentes. Il est une bonne pratique de faire ces deux opérations simultanément.
