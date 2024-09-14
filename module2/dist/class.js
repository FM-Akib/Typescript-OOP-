"use strict";
{
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        greetings() {
            console.log(`hello ${this.firstName} ${this.lastName}`);
        }
    }
    const person1 = new Person("harry", "potter");
    person1.greetings();
}
