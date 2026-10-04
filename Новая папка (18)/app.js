const student = {
    name: "Jane",
    age: 22,
    id: 2132994,

    sayHello() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

};


console.log(student.sayHello());