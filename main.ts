/******************************************************************
 * Functions for optical encoder on smart car.
 * Author: Rapha Pretorius
 * Email: raphapretorius@gmail.com
******************************************************************/


//% weight=40 color=#226025 icon="\uf110" block="Encoder"
//% groups=['Initial Setup', 'Functions', 'Variables - Counters', 'Variables - Distance']
namespace Encoder {
    // Set Global Variables.
    let wheelDiameter : number
    let stateSaved1: number
    let stateSaved2 : number
    let counter2 : number
    let counter1 : number
    let mmPerSlot : number
    let wheelCircumference : number
    let degPerSlot : number
    let encoderTwoPin : number
    let encoderOnePin : number
    let diskSlots : number

    /*
    *Input values for your specific encoder disk and motor wheels.
    */
    //% group="Initial Setup"
    //% weight=38
    //% blockGap=8
    //% blockId=set_your_values_here
    //% block="Wheel Diameter (mm) %wheelDia Number of disk slots %slots Encoder 1 to pin %e1pin Encoder 2 to pin %e2pin"
    export function setValues(wheelDia:number,slots:number,e1pin:number,e2pin:number):void {
        wheelDiameter = wheelDia
        diskSlots = slots
        encoderOnePin = e1pin
        encoderTwoPin = e2pin
        degPerSlot = 360 / diskSlots
        wheelCircumference = wheelDia * 3.14159
        mmPerSlot = wheelCircumference / 360 * degPerSlot
        stateSaved1 = 0
        stateSaved2 = 0
        counter1 = 0
        counter2 = 0
    }
    //% group="Functions"
    //% weight=36 
    //% blockGap=8
    //% block="reset all encoder counters"
    export function resetAllEncoderCounters(): void {
        counter1 = 0
        counter2 = 0
        stateSaved1 = pins.digitalReadPin(encoderOnePin)
        stateSaved2 = pins.digitalReadPin(encoderTwoPin)
    }

    //% group="Variables - Counters"
    //% weight=29 
    //% blockGap=8
    //% block="encoder 1 (slots)"
    export function encoder1Count():number{
        if(stateSaved1 != pins.digitalReadPin(encoderOnePin)){
            if (pins.digitalReadPin(encoderOnePin) == 1){
                counter1 += pins.digitalReadPin(encoderOnePin)
            }
            stateSaved1 = pins.digitalReadPin(encoderOnePin)
        }
        return(counter1);
    }
    //% group="Variables - Counters"
    //% weight=28 
    //% blockGap=40
    //% block="encoder 2 (slots)"
    export function encoder2Count(): number {
        if (stateSaved2 != pins.digitalReadPin(encoderTwoPin)) {
            if (pins.digitalReadPin(encoderTwoPin) == 1) {
                counter2 += pins.digitalReadPin(encoderTwoPin)
            }
            stateSaved2 = pins.digitalReadPin(encoderTwoPin)
        }
        return (counter2);
    }

    //% group="Variables - Distance"
    //% weight=19 
    //% blockGap=8
    //% block="wheel 1 (mm)"
    export function mmMovedOne():number{
        return(mmPerSlot*counter1)
    }
    //% group="Variables - Distance"
    //% weight=18 
    //% blockGap=40
    //% block="wheel 2 (mm)"
    export function mmMovedTwo():number{
        return(mmPerSlot*counter2)
    }
}
