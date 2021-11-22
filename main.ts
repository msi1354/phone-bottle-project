radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showString("Drink!")
        music.playMelody("B A B A B A B A ", 140)
    }
})
radio.setGroup(55)
music.setVolume(250)
