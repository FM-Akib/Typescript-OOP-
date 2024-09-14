{
    // it give a idea of a class or function not implementation ,
    //using interface
    interface Vehicle1{
         startEngine():void;
         stopEngine():void;
         move():void;
    }
    class Car implements Vehicle1{
        startEngine():void{
            console.log('Car engine started');
        }
        stopEngine():void{
            console.log('Car engine stopped');
        }
        move():void{
            console.log('Car is moving');
        }

        //or we can implement extra function as well
        test():void{
            console.log('Car is testing');
        }
    }
    const toyotaCar = new Car();
        toyotaCar.startEngine();
        toyotaCar.stopEngine();
        toyotaCar.move();
        toyotaCar.test();


        //using abstruction
        abstract class Vehicle2{
            abstract startEngine():void;
            abstract stopEngine():void;
            abstract move():void;
        }
        class Car2 extends Vehicle2{
            startEngine():void{
                console.log('Car engine started');
            }
            stopEngine():void{
                console.log('Car engine stopped');
            }
            move():void{
                console.log('Car is moving');
            }
        }
}