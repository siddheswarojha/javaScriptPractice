
class ElectronicDevices{
    ElectronicDevices(){
        var name;
        var modelNumber;
    }
    getName(){
        return this.name;
    }
    getModelNumber(){
        return this.modelNumber;
    }
    set(name,modelNumber){
        this.name= name;
        this.modelNumber=modelNumber;
        return name,modelNumber;

    }

    
    run(){
        console.log("Device is running");
    }
    destroy(){
        console.log("device has been destroyed");
    }
}

class MobilePhone extends ElectronicDevices{
    MobilePhone(){}
    run(){
        super.run();
        // this.newMobile();
        console.log("Mobile is running");
    }
    newMobile(){
        console.log("new phone is created");
    }
}

callFunction();
function callFunction(){
    var mobile = new MobilePhone()
    mobile.run();
    mobile.destroy();

    mobile.set("redmi","1001");
    console.log(mobile.getName());
    console.log(mobile.getModelNumber());

}