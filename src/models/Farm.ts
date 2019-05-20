import Drawable from "./abstract/Drawable"
import Field from "./Field"
import Cow from "./animals/Cow"
import Chicken from "./animals/Chicken"
import Sheep from "./animals/Sheep"
class Farm extends Drawable {
  fields: Field[] = []
  width: number = 700
  height: number = 710
  cows: any
  sheep: any
  chickens: any
  straw: any
  corn: any
  seeds: any
  milk: any
  beef: any
  eggs: any
  chicken: any
  wool: any
  lamb: any
  solarPanel: any
  greenGas: any
  constructor(
    cows: any = {
      name: "Cows",
      total: 100,
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
    corn: any = {
      name: "Corn",
      total: 1000,
      unit: "kilograms"
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
    eggs: any = {
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
    },
    solarPanel: any = {
      name: 'Solar Panel',
      total: 0,
      unit: 'units'
    },
    greenGas: any = {
      name: 'Green Gas',
      total: 0,
      unit: 'units'
    }
  ) {
    super()
    this.cows = cows
    this.sheep = sheep
    this.chickens = chickens
    this.straw = straw
    this.corn = corn
    this.milk = milk
    this.seeds = seeds
    this.beef = beef
    this.eggs = eggs
    this.wool = wool
    this.chicken = chicken
    this.lamb = lamb
    this.solarPanel = solarPanel
    this.greenGas = greenGas
  }

  public preload() {
    this.createBasicFarm()
  }

  private createBasicFarm = () => {
    let firstFieldX = 25
    let firstFieldY = 25
    let firstFieldW = 350
    let firstFieldH = 175

    //Cows
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

    //Chickens
    for (let i = 0; i < this.chickens.total; i++) {
      let chicken = new Chicken(this)
      chicken.p5 = this.p5
      chicken.preload()
      chicken.setRandomPositionInField(25, 275, 350, 125)
      this.chickens.objects.push(chicken)
    }

    //Sheeps
    for (let i = 0; i < this.sheep.total; i++) {
      let sheep = new Sheep(this)
      sheep.p5 = this.p5
      sheep.preload()
      sheep.setRandomPositionInField(25, 450, 300, 125)
      this.sheep.objects.push(sheep)
    }

    this.fields.push(
      new Field(
        firstFieldX,
        firstFieldY,
        firstFieldW,
        firstFieldH,
        this.cows.objects,
        "#017546"
      )
    )
    this.fields.push(new Field(25, 275, 350, 125, this.chickens.objects))
    this.fields.push(new Field(475, 25, 200, 325, [], "#ff6e47"))
    this.fields.push(new Field(25, 450, 300, 125, this.sheep.objects, "#017546"))
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
