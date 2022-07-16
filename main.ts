function setValues () {
    wheelDiameter = 66.1
    diskSlots = 20
    encoderOnePin = 0
    encoderTwoPin = 9
    degPerSlot = 360 / diskSlots
    wheelCircumference = wheelDiameter * 3.14159
    mmPerSlot = wheelCircumference / 360 * degPerSlot
}
// checks that state has changed before incrementing, function returns cm travelled.
function encoder1 () {
    if (stateSaved1 != pins.digitalReadPin(DigitalPin.P0)) {
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            counter1 += pins.digitalReadPin(DigitalPin.P0)
        }
        stateSaved1 = pins.digitalReadPin(DigitalPin.P0)
    }
    return counter1
}
function clearEncoders () {
    counter1 = 0
    counter2 = 0
    stateSaved1 = pins.digitalReadPin(DigitalPin.P0)
    stateSaved2 = pins.digitalReadPin(DigitalPin.P9)
}
function encoder2 () {
    if (stateSaved2 != pins.digitalReadPin(DigitalPin.P9)) {
        if (pins.digitalReadPin(DigitalPin.P9) == 1) {
            counter2 += pins.digitalReadPin(DigitalPin.P9)
        }
        stateSaved2 = pins.digitalReadPin(DigitalPin.P9)
    }
    return counter2
}
function stepsToMilimeters (count: number) {
    return 10.38 * count
}
let stateSaved2 = 0
let counter2 = 0
let counter1 = 0
let stateSaved1 = 0
let mmPerSlot = 0
let wheelCircumference = 0
let degPerSlot = 0
let encoderTwoPin = 0
let encoderOnePin = 0
let diskSlots = 0
let wheelDiameter = 0
clearEncoders()
basic.forever(function () {
	
})
