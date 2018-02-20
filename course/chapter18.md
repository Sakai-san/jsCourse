# Chapitre 18 : Closure

## Concept



```js
const students = [
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

const withDate = function( currentDate ){
  return function( birthDateString ){
    return currentDate.getFullYear() - new Date(birthDateString).getFullYear();
  }
}

const getAge = withDate( new Date() );
const ages = students.map ( (student) => {
  return getAge(student.birthDate);
});

console.log( ages );

```
