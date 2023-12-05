const button = document.querySelector('button');

button.addEventListener('click', () => {
    //* function 
    let valueOfInput = document.querySelector('select').value
    p = document.querySelector('p.scramble')
    p.innerText = scramble(valueOfInput);
})