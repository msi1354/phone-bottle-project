radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber == 2) {
        basic.showString("Drink")
    } else {
        basic.showString("Drink!")
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
radio.setGroup(55)
