interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
};

let student1: Student = {
  firstName: "Jon",
  lastName: "Snow",
  age: 24,
  location: "Winterfell",
};

let student2: Student = {
  firstName: "Arya",
  lastName: "Stark",
  age: 18,
  location: "Winterfell",
};

let studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const cellFirstName = document.createElement('td');
  cellFirstName.textContent = student.firstName;
  row.appendChild(cellFirstName);

  const cellLocation = document.createElement('td');
  cellLocation.textContent = student.location;
  row.appendChild(cellLocation);

  table.appendChild(row);
})
document.body.appendChild(table);
