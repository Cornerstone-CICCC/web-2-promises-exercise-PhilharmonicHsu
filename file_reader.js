const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
const paramsWithThen = {
    firstName: '',
    lastName: '',
    age: 0,
    hobbies: []
};

fs.readFile('./firstname.txt', 'utf-8')
    .then(firstName => {
        paramsWithThen.firstName = firstName;

        return fs.readFile('./lastname.txt', 'utf-8')
    })
    .then(lastName => {
        paramsWithThen.lastName = lastName;

        return fs.readFile('./age.txt', 'utf-8')
    })
    .then(age => {
        paramsWithThen.age = age;

        return fs.readFile('./hobbies.txt', 'utf-8')
    })
    .then(hobbiesString => {
        paramsWithThen.hobbies = JSON.parse(hobbiesString);

        console.log(
            makeSentence(paramsWithThen)
        );
    })

// ASYNC/AWAIT SOLUTION BELOW THIS LINE
const paramsWithAsync = {
    firstName: '',
    lastName: '',
    age: 0,
    hobbies: []
};

async function logSentenceByAsync() {
    paramsWithAsync.firstName = await fs.readFile("./firstname.txt", "utf-8");
    paramsWithAsync.lastName = await fs.readFile("./lastname.txt", "utf-8");
    paramsWithAsync.age = await fs.readFile("./age.txt", "utf-8");
    paramsWithAsync.hobbies = JSON.parse(await fs.readFile("./hobbies.txt", "utf-8"));

    console.log(
        makeSentence(paramsWithAsync)
    );
}

function makeSentence({firstName, lastName, age, hobbies}) {
    return `${firstName} ${lastName} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`
}

logSentenceByAsync();
