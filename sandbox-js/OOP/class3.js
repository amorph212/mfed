//MY CLASS

class Pc {
    welcome() {
        return "Welcome"
    }
    turnOn() {
        return "Turning on"
    }
    turnOff() {
        return "Turning off"
    }
}

class Notebook extends Pc {
    welcome() {
        return super.welcome() + " here in notebook";
    }
    turnOn() {
        return super.turnOn();
    }
    turnOff() {
        return super.turnOff();
    }
    wifiOn() {
        return true;
    }
}

class Tablet extends Notebook {
    welcome() {
        return super.welcome() + " here in tablet";
    }
    turnOn() {
        return super.turnOn();
    }
    turnOff() {
        return super.turnOff();
    }

    wifiOn() {
        return super.wifiOn();
    }
    
    bluetoothOn() {
        return true;
    }
}

function welcomeMessage(device) {
    console.log(device.welcome());
}

function turnOnMessage(device) {
    console.log(device.turnOn());
}

function turnOffMessage(device) {
    console.log(device.turnOff());
}

function wifi(device) {
    console.log("WiFi is on: ", device.wifiOn());
}

function bluetooth(device) {
    console.log("Bluetooth is on: ", device.bluetoothOn());
}



var myPc = new Pc();
var myNotebook = new Notebook();
var myTablet = new Tablet();


welcomeMessage(myPc);
welcomeMessage(myNotebook);
welcomeMessage(myTablet);

turnOnMessage(myPc);
turnOnMessage(myNotebook);
turnOnMessage(myTablet);

wifi(myNotebook);
wifi(myTablet);
bluetooth(myTablet);

turnOffMessage(myPc);
turnOffMessage(myNotebook);
turnOffMessage(myTablet);

