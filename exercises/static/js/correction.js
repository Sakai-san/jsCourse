const rawHtmlCheck = (submittedExercise, solution) => {
  const withoutBlankTagInBetween = removeBlankTagInBetween(submittedExercise);
  const withoutMultipleBlanks = replaceMultipleBlanks(withoutBlankTagInBetween);
  const trimed = withoutMultipleBlanks.trim();
  console.log('trimed', trimed);
  return withoutMultipleBlanks.trim() === solution;
};


const interpretedHtmlCheck = (submittedExercise, solution) => {
  console.log("interpreted exercise", JSON.stringify( $(submittedExercise)) );
  console.log("interpreted solution", JSON.stringify( $(solution) ));
  return $(submittedExercise).is( $(solution) );
  return $(submittedExercise).is(solution);
};
