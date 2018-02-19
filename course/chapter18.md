# Chapitre 17 : Closure

## Concept



```js
const students = [
  {
    first: "Masaru",
    last: "Segawa",
    grades: [3.5, 4, 4],
    birthDate: '1980-01-31'
  },
  {
    first: "Toma",
    last: "Sakai",
    grades: [4, 5, 5],
    birthDate: '1979-04-22'
  },
  {
    first: "Asako",
    last: "Ogiwara",
    grades: [6, 4, 4.5],
    birthDate: '1982-02-25'
  }
];


const getAge = function( birthDate, currentYear ){
    return currentYear - new Date(birthDate).getFullYear();
}

const cbkFunction = function(item, index){
    return getAge( item.birthDate, new Date().getFullYear() );
};

const ages = students.map( cbkFunction );
console.log( ages );
```
