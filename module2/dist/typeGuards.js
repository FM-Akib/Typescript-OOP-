"use strict";
{
    const add = (param1, param2) => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    const result = add(4, 5);
    console.log(result);
    const getUser = (user) => {
        if ('role' in user) {
            return `I am an admin and my role is ${user.role}`;
        }
        else {
            return `I am a normal user`;
        }
    };
    const admiral = {
        name: 'harry',
        role: 'admin'
    };
    const res = getUser(admiral);
    console.log(res);
    //==== Type Guards using instence of ======
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log(`${this.name} makes sound`);
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log(`${this.name} barks Gew Gew`);
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMeow() {
            console.log(`${this.name} meows MEOWW`);
        }
    }
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMeow();
        }
        else {
            animal.makeSound();
        }
    };
    const animal = new Animal('dogBhai', 'dog');
    getAnimal(animal);
}
