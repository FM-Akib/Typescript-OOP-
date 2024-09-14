"use strict";
{
    //same function or class but different implementation
    class Person {
        getSleep() {
            console.log('Sleeping for 6 hours');
        }
    }
    class Teacher extends Person {
        getSleep() {
            console.log('Sleeping for 5 hours');
        }
    }
    class Student extends Person {
        getSleep() {
            console.log('Sleeping for 7 hours');
        }
    }
    const getSleepingHours = (param) => {
        param.getSleep();
    };
    const person1 = new Person();
    const person2 = new Teacher();
    const person3 = new Student();
    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);
    // Now Example 2
    class Shape {
        getArea() {
            return 0;
        }
    }
    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        getArea() {
            return Math.PI * this.radius * this.radius;
        }
    }
    class Rectangle extends Shape {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea() {
            return this.height * this.width;
        }
    }
    const getAreaOfShape = (param) => {
        console.log(param.getArea());
    };
    const circle = new Circle(10);
    const rectangle = new Rectangle(10, 20);
    getAreaOfShape(circle);
    getAreaOfShape(rectangle);
}
