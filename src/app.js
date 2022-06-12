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
    document
        .getElementById('slct1')
        .addEventListener('input', handleAnimalSelect);
    document
        .getElementById('slct2')
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

buttonTest.addEventListener('click', async () => {
    const { testFunction } = await import('./test.js');
    testFunction();

})

function populate(strngA, strgB) {
    const s1 = document.getElementById(strngA);
    const s2 = document.getElementById(strgB);

    // console.log(s1.value);
    s2.innerText = '';
    switch (s1.value) {
        case "Chevy":
            let optionArry = [];
            optionArry.push("Camaro", "Corvette", "Equinox")
            console.log(optionArry);
            optionArry.forEach(car => {
                const optionElement = document.createElement('option');
                optionElement.textContent = car;
                s2.append(optionElement);
            })
            break;
        case "Ford":
            {
                let optionArry = [];
                optionArry.push("Edge", "Mustang", "Escape", "Taures")
                optionArry.forEach(car => {
                    const optionElement = document.createElement('option');
                    optionElement.innerText = car;
                    s2.appendChild(optionElement);
                })
            }
            break;
        case "Dodge":
            {
                let optionArry = [];
                optionArry.push('Viper', "Ram", 'Impala', 'HellCat', 'Durango')
                slct2.setAttribute('multiple', '"true"')
                optionArry.map(car => {
                    const optionE = document.createElement('option');
                    optionE.innerHTML = car;

                    s2.appendChild(optionE);
                })
            }
            break;
        default:
            console.log("Default Case");
    }



}