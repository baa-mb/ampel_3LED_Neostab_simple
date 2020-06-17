function led2 () {
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
}
function neo () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(1000)
}
input.onButtonPressed(Button.A, function () {
    mode = 0
    strip.clear()
})
input.onButtonPressed(Button.B, function () {
    mode = 1
})
let mode = 0
let strip: neopixel.Strip = null
basic.showIcon(IconNames.SmallDiamond)
let strip2 = neopixel.create(DigitalPin.P8, 8, NeoPixelMode.RGB)
strip2.showColor(neopixel.colors(NeoPixelColors.Black))
strip2.show()
strip = neopixel.create(DigitalPin.P8, 4, NeoPixelMode.RGB)
strip.clear()
mode = 0
basic.forever(function () {
    if (mode) {
        neo()
    } else {
        led2()
    }
    basic.pause(1000)
})
