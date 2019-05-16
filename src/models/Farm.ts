import Drawable from "./abstract/Drawable"
import Field from "./Field"
import Cow from "./animals/Cow"
class Farm extends Drawable {
  fields: Field[] = []
  width: number = 700
  height: number = 710
  cows: any
  sheep: any
  chickens: any
  straw: any
  milk: any
  seeds: any
  beef?: any
  egg?: any
  wool?: any
  chicken?: any
  lamb?: any
  constructor(
    cows: any = {
      name: "Cows",
      total: 142,
      objects: []
    },
    sheep: any = {
      name: "Sheep",
      total: 42,
      objects: []
    },
    chickens: any = {
      name: "Chickens",
      total: 42,
      objects: []
    },
    straw: any = {
      name: "Straw",
      total: 1000,
      unit: "bails"
    },
    milk: any = {
      name: "Milk",
      total: 0,
      unit: "pints"
    },
    beef: any = {
      name: 'Beef',
      total: 0,
      unit: 'ounces'
    },
    egg: any = {
      name: 'Egg',
      total: 0,
      unit: 'cartons'
    },
    wool: any = {
      name: 'Wool',
      total: 0,
      unit: 'bags'
    },
    chicken: any = {
      name: 'Chicken',
      total: 0,
      unit: 'kilograms'
    },
    lamb: any = {
      name: 'Lamb',
      total: 0,
      unit: 'kilograms'
    },
    seeds: any = {
      name: "Grass seeds",
      total: 0,
      unit: "bunches"
    }
  ) {
    super()
    this.cows = cows
    this.sheep = sheep
    this.chickens = chickens
    this.straw = straw
    this.milk = milk
    this.seeds = seeds
    this.beef = beef
    this.egg = egg
    this.wool = wool
    this.chicken = chicken
    this.lamb = lamb
  }

  public preload() {
    this.createBasicFarm()
  }

  private createBasicFarm = () => {
    let firstFieldX = 25
    let firstFieldY = 25
    let firstFieldW = 350
    let firstFieldH = 175

    for (let i = 0; i < this.cows.total; i++) {
      let cow = new Cow(this)
      cow.p5 = this.p5
      cow.preload()
      cow.setRandomPositionInField(
        firstFieldX,
        firstFieldY,
        firstFieldW,
        firstFieldH
      )
      this.cows.objects.push(cow)
    }
    this.fields.push(
      new Field(
        firstFieldX,
        firstFieldY,
        firstFieldW,
        firstFieldH,
        this.cows.objects
      )
    )
    this.fields.push(new Field(25, 275, 350, 125))
    this.fields.push(new Field(475, 25, 200, 325))
    this.fields.push(new Field(25, 450, 300, 125))
    for (let field of this.fields) {
      field.p5 = this.p5
      field.setHandleUpdate = this.updateUI
    }
  }

  public draw() {
    for (let field of this.fields) {
      field.draw()
    }
  }
}

export default Farm
