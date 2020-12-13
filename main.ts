function DeplaceRobot (directionText: string) {
    list = directionText.split(",")
    for (let value of list) {
        if (value == "LEFT") {
            basic.showArrow(ArrowNames.West)
        } else if (value == "RIGHT") {
            basic.showArrow(ArrowNames.East)
        } else {
            basic.showArrow(ArrowNames.North)
        }
        basic.pause(500)
    }
    basic.showIcon(IconNames.Heart)
}
radio.onReceivedString(function (receivedString) {
	
})
radio.onReceivedValue(function (name, value) {
	
})
let list: string[] = []
let receivedData = "LEFT,FRONT,LEFT,FRONT,RIGHT,FRONT"
DeplaceRobot(receivedData)
basic.forever(function () {
	
})
