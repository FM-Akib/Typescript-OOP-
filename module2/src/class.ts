{
    class Person {
        constructor(public firstName: string, public lastName: string) {
        }
        greetings(){
            console.log(`hello ${this.firstName} ${this.lastName}`);

        }
    }

    const person1 = new Person("harry", "potter");
    person1.greetings();


    //or we can declare class another way
    class Animal {
        name: string;
        sound: string;

        constructor( name:string, sound:string ) {
            this.name = name;
            this.sound = sound;
        }
        makesound(){
            console.log(`${this.name} says ${this.sound}`);
        }
    }
    const animal1= new Animal("Dog","Gew Gew")
    animal1.makesound();
}