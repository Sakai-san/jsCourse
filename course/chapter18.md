# Chapitre 18 : Closure

Une closure est une fonction dont le corps a accès de manière persistente à des variables qui ne sont pas dans sa portée locale (environnement extérieur), par example celui d'une fonction englobante.

Le concept de closure n'est pas a confondre avec le concept de fonction anonyme.

## Illustration

Supposons que nous avons un tableau d'étudiants représenté sous forme d'objet et nous aimerions obtenir un tableau contenant l'ages de ces étudiants.

```js
var students = [
  {
    first : "Masaru",
    last  : "Segawa",
    grades : [3.5, 4, 4],
    birthDate: '1980-01-31'
  },
  {
    first : "Toma",
    last  : "Sakai",
    grades : [4, 5, 5],
    birthDate: '1979-04-22'
  },
  {
    first : "Asako",
    last  : "Ogiwara",
    grades : [6, 4, 4.5],
    birthDate: '1982-02-25'
  }
];

var ages = students.map(function(student){
  var currentYear = new Date('2018-01-01').getFullYear();
  var birthYear = new Date(student.birthDate).getFullYear();
  return currentYear - birthYear;
});

console.log(ages); // [38, 39, 36]

```

Le problème ici, c'est que dans la boucle, on crée à chaque itération, un object Date avec la date courante, soit `Date('2018-01-01')`. Or cette date est constante, il n'est dont pas performant de créer cet object à chaque itération.

Voyons comment utiliser ici le concept de closure.

```js
const withDate = function(currentDate){
  return function(birthDate){
      return currentDate.getFullYear() - new Date(birthDate).getFullYear();
    }
};

const getAge = withDate(new Date('2018-01-01')); // getAge is the closure
const ages = students.map(function(student){
  return getAge(student.birthDate);
});

console.log(ages); // [38, 39, 36]
```

La fonction `withDate` retourne, lors de son appel, une nouvelle fonction, à savoir une closure. Cette closure a accès à l'environnement local de `withDate`.
