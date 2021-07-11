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

const ninja1 = new ninja("Hyabusa");
ninja1.sayname();
ninja1.drinkSake();
ninja1.showState();