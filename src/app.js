const myArray = [1, 2, 3, 1, 5, 8, 1, 2, 9, 4];
const unique = [...new Set(myArray)];
const unique2 = [new Set(myArray)];
const buttonTest = document.querySelector('#btnSend');

buttonTest.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e)
})

document.addEventListener('DOMContentLoaded', () => {
    document
        .getElementById('flavours')
        .addEventListener('input', handleSelect);
    document
        .getElementById('username')
        .addEventListener('input', handleData);
    document
        .getElementById('animals')
        .addEventListener('input', handleAnimalSelect);
})

function handleSelect(ev) {
    let select = ev.target;
    console.log(select.value);
    let choices = [];
    for (let i = 0; i < select.selectedOptions.length; i++) {
        choices.push(select.selectedOptions[i].value);
    }

    console.log(choices);
}
function handleData(ev) {
    let theInput = ev.target;
    console.log(theInput.value, typeof theInput.value);

}

function handleAnimalSelect(e) {
    let select = e.target;
    console.log(select.value);
    // Interater Option 1
    // let choices = [];
    // for (let i = 0; i < select.selectedOptions.length; i++) {
    //     choices.push(select.selectedOptions[i].value);
    // }
    // Iterate Option 2
    const choices = [].map.call(select.selectedOptions, option => option.value);
    console.log(choices);
}
