import React, { Component } from "react"
class MarketDashboard extends Component {

  buyItem = item => {
    const currentFarmer = this.props.market.currentFarmer;

    console.log('market: ', this.props.market)

    if (item === "seeds") {
      if (currentFarmer.budget - this.props.market.grassSeedPrice > 0) {

        currentFarmer.myFarm.seeds.total += 1
        currentFarmer.budget -= this.props.market.grassSeedPrice
        console.log(currentFarmer.myFarm.seeds)
      }

    } else if (item === "solarPanel") {
      if (currentFarmer.budget - this.props.market.solarPanelPrice > 0) {

        currentFarmer.myFarm.solarPanel.total += 1
        currentFarmer.budget -= this.props.market.solarPanelPrice
        console.log(currentFarmer.myFarm.solarPanel)
      }

    } else if (item === "greenGas") {
      if (currentFarmer.budget - this.props.market.greenGasPrice > 0) {

        currentFarmer.myFarm.greenGas.total += 1
        currentFarmer.budget -= this.props.market.greenGasPrice
        console.log(currentFarmer.myFarm.greenGas)
      }


    } else if (item === "cows") {
      if (currentFarmer.budget - this.props.market.animalCowPrice > 0) {

        currentFarmer.myFarm.cows.total += 1
        currentFarmer.budget -= this.props.market.animalCowPrice
        console.log(currentFarmer.myFarm.greenGas)
      }


    } else if (item === "chickens") {
      if (currentFarmer.budget - this.props.market.animalChickenPrice > 0) {

        currentFarmer.myFarm.chickens.total += 1
        currentFarmer.budget -= this.props.market.animalChickenPrice
        console.log(currentFarmer.myFarm.greenGas)
      }


    } else if (item === "sheep") {
      if (currentFarmer.budget - this.props.market.animalSheepPrice > 0) {

        currentFarmer.myFarm.sheep.total += 1
        currentFarmer.budget -= this.props.market.animalSheepPrice
        console.log(currentFarmer.myFarm.greenGas)
      }


    }

  }

  sellItem = item => {
    const currentFarmer = this.props.market.currentFarmer
    if (item === "milk") {
      if (currentFarmer.myFarm.milk.total > 0) {

        currentFarmer.myFarm.milk.total -= 1
        currentFarmer.budget += this.props.market.milkPrice
      }
    } else if (item === "beef") {
      if (currentFarmer.myFarm.beef.total > 0) {
        currentFarmer.myFarm.beef.total -= 1
        currentFarmer.budget += this.props.market.beefPrice
      }
    } else if (item === "egg") {
      if (currentFarmer.myFarm.eggs.total > 0) {
        currentFarmer.myFarm.eggs.total -= 1
        currentFarmer.budget += this.props.market.eggPrice
      }
    } else if (item === "wool") {
      if (currentFarmer.myFarm.wool.total > 0) {
        currentFarmer.myFarm.wool.total -= 1
        currentFarmer.budget += this.props.market.woolPrice
      }
    } else if (item === "chicken") {
      if (currentFarmer.myFarm.chicken.total > 0) {
        currentFarmer.myFarm.chicken.total -= 1
        currentFarmer.budget += this.props.market.meatChickenPrice
      }
    } else if (item === "lamb") {
      if (currentFarmer.myFarm.lamb.total > 0) {
        currentFarmer.myFarm.lamb.total -= 1
        currentFarmer.budget += this.props.market.meatLambPrice
      }
    }
  }

  render() {
    return (
      <div className="MarketDashboard">
        <h2>Market</h2>
        <p>Welcome to the market! See our prices below:</p>
        <h3>Buy</h3>
        <dl>
          <dt>Seeds</dt>
          <dd>
            <button onClick={() => this.buyItem("seeds")}>
              Buy seeds for £{this.props.market.grassSeedPrice}
            </button>
          </dd>
          <dt>Solar panels</dt>
          <dd>
            <button onClick={() => this.buyItem("solarPanel")}>
              £{this.props.market.solarPanelPrice} per unit
            </button>
          </dd>
          <dt>Green gas</dt>
          <dd>
            <button onClick={() => this.buyItem("greenGas")}>
              £{this.props.market.greenGasPrice} per unit
            </button>
          </dd>
          <dt>Cows</dt>
          <dd>
            <button onClick={() => this.buyItem("cows")}>
              £{this.props.market.animalCowPrice} per animal
            </button>
          </dd>
          <dt>Chickens</dt>
          <dd>
            <button onClick={() => this.buyItem("chickens")}>
              £{this.props.market.animalChickenPrice} per animal
            </button>
          </dd>
          <dt>Sheep</dt>
          <dd>
            <button onClick={() => this.buyItem("sheep")}>
              £{this.props.market.animalSheepPrice} per animal
            </button>
          </dd>
        </dl>
        <h3>Sell</h3>
        <dl>
          <dt>Milk</dt>
          <dd>£{this.props.market.milkPrice} per pint</dd>
          <button onClick={() => this.sellItem("milk")}>Sell Milk</button>
          <dt>Beef</dt>
          <dd>£{this.props.market.beefPrice} ounce</dd>
          <button onClick={() => this.sellItem("beef")}>Sell Beef</button>
          <dt>Eggs</dt>
          <dd>£{this.props.market.eggPrice} ounce</dd>
          <button onClick={() => this.sellItem("egg")}>Sell Eggs</button>
          <dt>Chicken</dt>
          <dd>£{this.props.market.meatChickenPrice} kilograms</dd>
          <button onClick={() => this.sellItem("chicken")}>Sell Chicken</button>
          <dt>Wool</dt>
          <dd>£{this.props.market.woolPrice} bags</dd>
          <button onClick={() => this.sellItem("wool")}>Sell Wool</button>
          <dt>Lamb</dt>
          <dd>£{this.props.market.meatLambPrice} kilograms</dd>
          <button onClick={() => this.sellItem("lamb")}>Sell Lamb</button>
        </dl>
      </div>
    )
  }
}

export default MarketDashboard
