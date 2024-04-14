'use strict';

const ul = document.querySelector('#target');

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for (let i = 0; i < students.length; i++) {
  const student = document.createElement('option');
  student.value = students[i].id;
  console.log(`${students[i].name} ${students[i].id}`);
  student.textContent = students[i].name;
  ul.appendChild(student);
}




