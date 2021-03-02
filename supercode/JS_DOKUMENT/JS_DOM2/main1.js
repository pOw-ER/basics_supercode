
document.querySelector('h1').addEventListener('click', (e) => {
    // e.stopPropagation();
    console.log('h1 clicked')
})
document.querySelector('section').addEventListener('click', () => {
    console.log('section clicked')
})

for (let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
    elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
}