radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
radio.setGroup(55)
