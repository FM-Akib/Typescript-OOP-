"use strict";
{
    //person is a parent class
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(hours) {
            console.log(`${this.name} sleeping ${hours} hours`);
        }
    }
    //student is a child class
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const student1 = new Student("Akib", 24, "Dhaka");
    student1.getSleep(8);
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
    }
    const teacher1 = new Teacher("Fahim", 35, "Dhaka", "Professor");
    teacher1.getSleep(5);
}
