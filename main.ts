input.onButtonPressed(Button.A, function () {
    angle += 10
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, angle)
})
input.onButtonPressed(Button.B, function () {
    angle += -10
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, angle)
})
let angle = 0
angle = 90
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, angle)
basic.forever(function () {
    basic.showNumber(angle)
})
