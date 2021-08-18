console.dir(document.title)

let h1Element = document.querySelector('.caption');
console.dir(h1Element);

h1Element.textContent = 'Address Book';
h1Element.style.backgroundColor = 'lightgray'
h1Element.style.borderBottom = '1px solid black'

// <button type='button' value='Add Contact'>
const addButtonElement = document.createElement('input');
addButtonElement.setAttribute('type', 'button');
addButtonElement.setAttribute('value', 'Add Contact');

const mainSection = document.getElementsByTagName('section')[0];
const h2Element = document.querySelector('section > h2');

//mainSection.appendChild(addButtonElement);
mainSection.insertBefore(addButtonElement, h2Element);
const addContactFunction = () => {
    const contactInput = document.getElementById('contact-name');
    const contactListElement = document.querySelector('.contact-list');

    if (contactInput.value) {
        document.querySelector('#message').style.display = 'none';
        contactListElement.innerHTML += `<li>${contactInput.value}</li>`;

        contactInput.value = '';
        contactInput.focus();
    }else{
        document.querySelector('#message').textContent = 'Contact name cannot be empty'
        document.querySelector('#message').style.display = 'block';
    }

    let oddLiElements = document.querySelectorAll('.contact-list>li:nth-child(odd)');
    // oddLiElements.forEach(li => li.setAttribute('class', 'highlight'));
   //oddLiElements.forEach(li => li.style.backgroundColor = 'lightblue');
   oddLiElements.forEach(li => li.classList.add('highlight'));
}

addButtonElement.addEventListener("click", addContactFunction)


