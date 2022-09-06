input.onButtonPressed(Button.A, function () {
    pancakes += 3
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . . .
        . # . . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    tie = 1
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    waffles += 3
    basic.showLeds(`
        # . . . #
        # . # . #
        # . # . #
        # . # . #
        # # # # #
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (pancakes))
    basic.showString("" + (waffles))
    basic.showString("pancakes vs waffles")
    basic.showString("" + (tie))
})
let tie = 0
let pancakes = 0
let waffles = 0
waffles = 0
pancakes = 0
