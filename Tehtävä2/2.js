const ul = document.querySelector('#target');

const item1 = document.createElement('li');
    item1.textContent = 'first item';

const item2 = document.createElement('li');
    item2.textContent = 'Second item';
    item2.classList.add('my-item');

const item3 = document.createElement('li');
    item3.textContent = 'Third item';

ul.appendChild(item1);
ul.appendChild(item2);
ul.appendChild(item3);