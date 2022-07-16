

namespace encoder {
    


    //%block="Wheel Diameter %wheelDiameter \n Number of disk slots %diskSlots \n Encoder 1 pin %encoderOnePin \n Encoder 2 pin %encoderTwoPin"

    export function setValues(wheelDiameter:number,diskSlots:number,encoderOnePin:number,encoderTwoPin:number) {
        let degPerSlot = 360 / diskSlots
        let wheelCircumference = wheelDiameter * 3.14159
        let mmPerSlot = wheelCircumference / 360 * degPerSlot
        return(encoderOnePin,encoderTwoPin,mmPerSlot);
    }
    
}
