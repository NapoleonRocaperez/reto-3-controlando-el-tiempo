let inicio = 0
input.onButtonPressed(Button.A, function () {
    inicio = 0
    for (let index = 0; index < 30; index++) {
        basic.showString("" + (inicio))
        inicio += 1
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
