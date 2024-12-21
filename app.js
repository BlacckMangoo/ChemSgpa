



function GetRollNo() {
    
    
    let rollNumberEntered = document.getElementById("rollNumber").value.trim();
    fetch('data.json') 
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
            // Find the student with the matching roll number
            const student = data.find(student => student['Roll No.'] === rollNumberEntered);

            if (student) {
               
                let gpaText = document.getElementById("gpa");
               let  gpaTextTwo = document.getElementById("gpaTwo");
                let studentMarks = parseInt(student['FINAL MARKS']);
                
                // New grading logic based on absolute marks
                let grade;
                let gpaValue;

              // New grading rules
              if (studentMarks < 30) {
                grade = "F";
                gpaValue = "semester back";
            } else if (studentMarks >= 95) {
                grade = "O"; // Ensure grade is not less than O
                gpaValue = "10";
            } else if (studentMarks >= 85) {
                grade = "O";
                gpaValue = "10";
            } else if (studentMarks >= 40 && studentMarks < 45) {
                grade = "D"; // Ensure no grade less than D for >40%
                gpaValue = "4";
            } else {
                // Existing grading conditions
                if (studentMarks >= 90 && studentMarks <= 100) {
                    grade = "O";
                    gpaValue = "10";
                } else if (studentMarks >= 81 && studentMarks < 90) {
                    grade = "A+";
                    gpaValue = "9";
                } else if (studentMarks >= 72 && studentMarks < 81) {
                    grade = "A";
                    gpaValue = "8";
                } else if (studentMarks >= 63 && studentMarks < 72) {
                    grade = "B+";
                    gpaValue = "7";
                } else if (studentMarks >= 54 && studentMarks < 63) {
                    grade = "B";
                    gpaValue = "6";
                } else if (studentMarks >= 45 && studentMarks < 54) {
                    grade = "C";
                    gpaValue = "5";
                } else if (studentMarks >= 35 && studentMarks < 45) {
                    grade = "D";
                    gpaValue = "4";
                } else {
                    grade = "F";
                    gpaValue = "semester back ";
                }
            }
                let n = studentMarks - 48.2 ; 
                let p = n/18.62;
                
                if( p<1.5 && studentMarks >= 95)
                {
                    gpaTextTwo.textContent = "10";
                }
                if (p > 1.5 && studentMarks >= 85) {
                    gpaTextTwo.textContent = "10";
                } 
                else if( p>1.5 && studentMarks < 85)
                {
                    gpaTextTwo.textContent = gpaValue;
                }
                
                else if (p > 1.0  ) {

                    gpaTextTwo.textContent = "9";
                } else if (p > 0.5) {
                    gpaTextTwo.textContent = "8";
                } else if (p > 0.0) {
                    gpaTextTwo.textContent = "7";
                } else if (p > -0.5) {
                    gpaTextTwo.textContent = "6";
                } else if (p > -1.0) {
                    gpaTextTwo.textContent = "5";
                } else if (p > -1.5  && studentMarks > 30) {
                    gpaTextTwo.textContent = "4";
                } else {
                    if(studentMarks > 40)
                    {
                        gpaTextTwo.textContent = "4";
                    }
                    else
                    {
                        gpaTextTwo.textContent = "semester back";
                    }
                    
                }
                // Update both grade and GPA in the UI
                gpaText.textContent =  `(Grade: ${grade} (GPA: ${gpaValue})`;
                console.log(gpaText);
            } else {
                // If the roll number doesn't exist in the data
                console.log("Roll number not found.");
            }
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });



}
