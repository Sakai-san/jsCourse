# Chapitre 13 : Context

## Concept

  Le mot clé *this* est en fait une référence sur l'objet en cours.

  Lorsque le contexte change, on peut sauvegarder le contexte dans une variable.

  ```js
  var university = {
    name: "University of Lausanne",
    students: [ {first: 'Toma', grades: [3.5, 2.0]}, {first: 'Alfredo', grades: [5, 5.5, 6.0]}, {first: 'Michael', grades: [4.5, 5.0, 4.5]}],

    displayStudents : function(){
      var self = this;   // this refers the university object
      self.students.forEach( function(s){
          console.log( s.first  +" studies at " + this.name  ); // wrong, since this refers to the current student
          console.log( s.first  +" studies at " + self.name  ); // correct !
        });
    }
  };
  ```

  Lorsque le contexte change, on peut aussi spécifier à quel contexte on fait référence.
  ```js
  var university = {
    name: "University of Lausanne",
    students: [ {first: 'Toma', grades: [3.5, 2.0]}, {first: 'Alfredo', grades: [5, 5.5, 6.0]}, {first: 'Michael', grades: [4.5, 5.0, 4.5]}],

    displayStudents : function(){
      this.students.forEach( function(s){
          console.log( s.first  +" studies at " + this.name  ); // this explicitely refers to the university object
        }.bind(this));
    }
  };
  ```
