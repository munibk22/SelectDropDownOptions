export const testFunction = () => {
    const person = {
        name: ""
    };
    name = 'Munib2'
    console.log(`My name is: ${person.name ?? name}`)
    console.log(name)
    const inputVal = document.getElementById('username');
    // if (person.name != null)
    inputVal.value = person?.name ? person?.name != null ? person?.name : name : name;
    // inputVal.value = person?.name ?? name;
}

//testFunction();