class ninja{
    constructor(name, health, speed,strngth) {
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strngth=3;
    }
     sayname() {
        console.log(this.name);
        
    }
    showState(){
        console.log(this.health);
        console.log(this.speed);
        console.log(this.strngth);
    }
    drinkSake(){
    return this.health+=10;
    }
}
class sensei extends ninja{
    constructor(name){
        super(name);
        this.health=200;
        this.speed=10;
        this.strngth=10;
        this.wisdom=10;
    }
    speakwisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months");
    }

    drinkSake(){
        console.log(`Name: ${this.name} Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strngth}`);
    }



}


// const ninja1 = new ninja("Hyabusa");
// ninja1.sayname();
// ninja1.drinkSake();
// ninja1.showState();
const sin = new sensei("Ivar");
sin.drinkSake();
sin.speakwisdom();