{
    //person is a parent class
    class Person {
        name:string;
        age:number;
        address:string;
        constructor(name:string,age:number,address:string){
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(hours:number){
            console.log(`${this.name} sleeping ${hours} hours`);
        }
    }


    //student is a child class
    class Student extends Person{
        constructor(name:string,age:number,address:string){
            super(name,age,address);
        }
    }
    const student1 =  new Student("Akib",24,"Dhaka");
    student1.getSleep(8);

    class Teacher extends Person{
        designation:string;
        constructor(name:string,age:number,address:string,designation:string){
            super(name,age,address);
            this.designation = designation;
        }
    }
    const teacher1 =  new Teacher("Fahim",35,"Dhaka","Professor");
    teacher1.getSleep(5);
}