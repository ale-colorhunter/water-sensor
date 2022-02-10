let item = 0
basic.clearScreen()
basic.forever(function () {
    item = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(item)
    basic.pause(100)
    serial.writeValue("value", item)
    if (item > 400) {
        pins.digitalWritePin(DigitalPin.P5, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P5, 0)
    }
})
