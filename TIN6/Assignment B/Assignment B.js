// b)	Write a JS function that will
//      add a paragraph of text to the page

const paragraph = document.createElement('p')
paragraph.innerText = 'Hello World!'
//      after 5 seconds from opening the page
setTimeout(() => document.body.appendChild(paragraph), 5000)
