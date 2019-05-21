import Drawable from "./abstract/Drawable"
import FieldType from "./abstract/FieldType"
import Infrastructure from "./abstract/Infrastructure"


class Field extends Drawable {
  image: any
  contents: any[]
  fillColour: string = ""
  type: FieldType = FieldType.Grazing

  constructor(
    xPos: number,
    yPos: number,
    w: number,
    h: number,
    initalContents: any[] = [],
    fillColour: string = "#d8a27b",
    type: FieldType = FieldType.Grazing
  ) {
    super()
    this.width = w
    this.height = h
    this.x = xPos
    this.y = yPos
    this.contents = initalContents
    this.fillColour = fillColour
    this.type = type
  }

  public draw() {
    this.p5.stroke("#7c4011")
    this.p5.strokeWeight(10)
    this.p5.fill(this.fillColour)
    this.p5.rect(this.x, this.y, this.width, this.height, 10)

    for (var item of this.contents) { 
      item.draw()
    }
  }

  plant(x: number, y: number) {
    console.log("new plant")
    // // Get the crop name from the field name
    // var cropName = this.name.split(" ") // => e.g. "Wheat"
    // // Add a new crop to the field's list of crops
    // this.crops.push(new Crop(cropName[0], this, x, y))
  }

  placeInfrastructure(x: number, y: number, name: string) {
    let infrastructure = new Infrastructure(name)
    infrastructure.p5 = this.p5
    infrastructure.preload()
    infrastructure.setRandomPositionInField(this.x, this.y, this.width, this.height)
    this.contents.push(infrastructure)
  }


}

export default Field
