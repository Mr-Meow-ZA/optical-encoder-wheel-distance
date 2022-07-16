
//% weight=40 color=#226025 icon="\uf110" block="Encoder"
namespace encoder {
    
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

    //% weight=38
    //% block="Wheel Diameter %wheelDia Number of disk slots %slots Encoder 1 to pin %e1pin Encoder 2 to pin %e2pin"
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
    
    // //% weight=25 block = "distance (mm)"
    //export function mmMovedPerSlot():number{
    //    return(mmPerSlot);
    //}

    // //% weight=24 block = "degrees per slot"
    //export function degreePerSlot(): number {
    //    return (degPerSlot);
    //}

    //% weight=29 block = "encoder 1 counter"
    export function encoder1Count():number{
        if(stateSaved1 != pins.digitalReadPin(encoderOnePin)){
            if (pins.digitalReadPin(encoderOnePin) == 1){
                counter1 += pins.digitalReadPin(encoderOnePin)
            }
            stateSaved1 = pins.digitalReadPin(encoderOnePin)
        }
        return(counter1);
    }
    //% weight=28 block="encoder 2 counter"
    export function encoder2Count(): number {
        if (stateSaved2 != pins.digitalReadPin(encoderTwoPin)) {
            if (pins.digitalReadPin(encoderTwoPin) == 1) {
                counter2 += pins.digitalReadPin(encoderTwoPin)
            }
            stateSaved2 = pins.digitalReadPin(encoderTwoPin)
        }
        return (counter2);
    }

    //% weight=36 block="reset all encoder counters"
    export function resetAllEncoderCounters():void {
        counter1 = 0
        counter2 = 0
        stateSaved1 = pins.digitalReadPin(encoderOnePin)
        stateSaved2 = pins.digitalReadPin(encoderTwoPin)
    }
    //% weight=19 block="encoder 1 moved (mm)"
    export function mmMovedOne():number{
        return(mmPerSlot*counter1)
    }
    //% weight=18 block="encoder 2 moved (mm)"
    export function mmMovedTwo():number{
        return(mmPerSlot*counter2)
    }
}
