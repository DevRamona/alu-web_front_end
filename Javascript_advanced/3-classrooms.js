function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return () => seat;
  }
  const students = [];
  console.log(students);

  for (let i = 0; i < numbersOfStudents; i++) {
    students.push(studentSeat(i + 1));
  }

  return students;
}

// Closure classRoom with 10 students
const classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[9]());