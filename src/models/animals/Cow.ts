import Animal from "../abstract/Animal"
import Farm from "../Farm";
class Cow extends Animal {
  name: string = "Cow"
  genus: string = "Cows"
  imgUrl: string = "/img/twtr/1f404.png"
  eats: string = "straw"
  hunger: number = 0
  farm: Farm

  constructor(farm: Farm) {
    super()
    this.farm = farm
  }

  // if cow is hungry, yield less milk
  yieldMilk(): any {
    let amountOfMilkToYield = 5 - this.hunger
    this.farm.milk.total += Math.abs(amountOfMilkToYield)
    this.hunger += 1
  }

  // if cow is thin, yield less beef
  yieldBeef(): any {
    this.farm.beef.total += this.hunger > 0 ? 100 / this.hunger : 120
    this.hunger += 1
    this.health=0
    // return this.hunger > 0 ? 100 / this.hunger : 120
  }

  eatStraw(): any {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.straw.total > 0) {
        this.farm.straw.total--
        this.hunger = this.hunger - 1
      } else {
        if (this.hunger < 5) {
          this.hunger = this.hunger + 1
        }

      }
    }
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl)
    console.log(this.p5Img)
  }

  makeSound() {
    return "Moooo"
  }

  checkHealth() {
    if (this.hunger >= 5) {
      console.log("Dying", this.health)
      this.health -= 1
    }
    if (this.health <= 0) {
      this.farm.cows.objects.pop()
      this.farm.cows.total -=1
    }
  }

  public draw(): any {

    this.constrainItem()
    this.doSomethingOccasionally(() => this.eatStraw())
    this.stopForFarmer()
    this.checkHealth()

  }
}

export default Cow
