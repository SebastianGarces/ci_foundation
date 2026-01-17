type Person = {
    name: string;
    age: number;
    email: string;
};

const person: Person = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
};

function main() {
    console.log('CI foundations working', person);
}

main();
