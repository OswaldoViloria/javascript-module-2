// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

  const studentGrades = {
    tom: 20,
    george: 17,
    abdul: 19,
  };
  
  const studentKey = Object.keys(studentGrades);
  const studentvalues = Object.values(studentGrades);
  
  studentvalues.forEach((studentvalues, key) =>{
    if (studentvalues > 18 ){
      //LLamo a la variable de las llaves y le agrego la mayus. y coloco los values
    console.log(`${studentKey[key].toUpperCase()} - ${studentvalues}`);
    }
})
  
  // Prints
  // TOM - 20
  // ABDUL - 19