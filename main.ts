basic.showIcon(IconNames.Yes)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 700)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P1, 700)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P2, 700)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P0, 0)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P1, 0)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(200)
})
