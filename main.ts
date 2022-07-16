
//% weight=40 color=#226025 icon="\uf0e4"
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

    //% weight=30
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
    
    //% weight=25
    //% block = "distance (mm)"
    export function mmMovedPerSlot():number{
        return(mmPerSlot);
    }
    //% weight=24
    //% block = "degrees per slot"
    export function degreePerSlot(): number {
        return (degPerSlot);
    }

}
