class Train {
    constructor(color, lightsOn) { //constructor is a special function of class, it is for properities
        this.color = color;
        this.lightsOn = lightsOn;
    }

    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() { //method prints out the properties on the object instance it is called on
        console.log(this);
    }

    getPrototype() { //prototype of the object instance of the Train class.
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}


class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train("red", false); // new instance of Train
console.log(myFirstTrain);
var mySecondTrain = new Train("blue", true);
console.log(mySecondTrain);
var myThirdTrain = new Train("yellow", false);
console.log(myThirdTrain);

console.log("\nTrain 4");
var train4 = new Train("violet", false);
console.log(train4);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype();  // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

console.log("\nTrain 5");
var train5 = new Train("pink", false);
train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
train5.getPrototype();

console.log("\nHigh Speed 1");
var highSpeed1 = new HighSpeedTrain(200, false, "green", false);
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.
highSpeed1.getPrototype();