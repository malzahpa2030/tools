function PlotAcceleration () {
    basic.showString("Plot acceleration:")
    basic.showNumber(acceleration)
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    basic.showLeds(`
        # # # # .
        # # # . #
        . . # . .
        . . # . .
        . . # . .
        `)
}
function Start () {
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    basic.showLeds(`
        # # # # .
        # # # . #
        . . # . .
        . . # . .
        . . # . .
        `)
}
function RotationPitch () {
    basic.showString("Rotation pitch")
    basic.showNumber(rotationpitch)
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    basic.showLeds(`
        # # # # .
        # # # . #
        . . # . .
        . . # . .
        . . # . .
        `)
}
input.onButtonPressed(Button.A, function () {
    PlotAcceleration()
})
input.onButtonPressed(Button.AB, function () {
    Temperature()
})
input.onButtonPressed(Button.B, function () {
    LightLevel()
})
input.onGesture(Gesture.Shake, function () {
    RotationPitch()
})
function LightLevel () {
    basic.showString("Light level:")
    basic.showNumber(lightlevel)
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    basic.showLeds(`
        # # # # .
        # # # . #
        . . # . .
        . . # . .
        . . # . .
        `)
}
function Temperature () {
    basic.showString("Temperature:")
    basic.showNumber(temperature)
    basic.showString("C")
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    basic.showLeds(`
        # # # # .
        # # # . #
        . . # . .
        . . # . .
        . . # . .
        `)
}
function SetVariables () {
    acceleration = input.acceleration(Dimension.Y)
    lightlevel = input.lightLevel()
    temperature = input.temperature()
    rotationpitch = input.rotation(Rotation.Pitch)
}
let temperature = 0
let lightlevel = 0
let rotationpitch = 0
let acceleration = 0
Start()
basic.forever(function () {
    SetVariables()
})
