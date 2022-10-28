let a = 0
input.onButtonPressed(Button.A, function () {
    a = randint(0, 2)
    if (a == 0) {
        basic.showIcon(IconNames.Target)
    } else if (a == 1) {
        basic.showIcon(IconNames.Square)
    } else if (a == 2) {
        basic.showIcon(IconNames.Scissors)
    }
    basic.clearScreen()
    basic.pause(500)
    a = randint(0, 2)
    if (a == 1) {
        basic.showIcon(IconNames.Scissors)
    } else if (a == 2) {
        basic.showIcon(IconNames.Target)
    } else if (a == 0) {
        basic.showIcon(IconNames.Square)
    }
    basic.clearScreen()
})
