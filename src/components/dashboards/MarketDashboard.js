import React, { Component } from "react"
import "../../index.css"
class MarketDashboard extends Component {

  buyItem = item => {
    const currentFarmer = this.props.market.currentFarmer;
    if (currentFarmer.budget > 0) {
      if (item === "seeds") {

        currentFarmer.myFarm.seeds.total += 1
        currentFarmer.budget -= this.props.market.grassSeedPrice
        console.log(currentFarmer.myFarm.seeds)
      } else if (item === "solarPanel") {

        currentFarmer.myFarm.solarPanel.total += 1
        currentFarmer.budget -= this.props.market.solarPanelPrice
      } else if (item === "greenGas") {

        currentFarmer.myFarm.greenGas.total += 1
        currentFarmer.budget -= this.props.market.greenGasPrice
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
      if (currentFarmer.myFarm.egg.total > 0) {
        currentFarmer.myFarm.egg.total -= 1
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
            <button onClick={() => this.buyItem("solarPanel")}>
              £{this.props.market.greenGasPrice} per unit
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
          <dt>Test</dt>
          <dd>£{this.props.market.beefPrice} ounce</dd>
          <button onClick={() => this.sellItem("beef")}>Sell Beef</button>
          <dt>This should be seen</dt>
          <dd>£{this.props.market.beefPrice} ounce</dd>
          <button onClick={() => this.sellItem("beef")}>Sell Beef</button>
        </dl>
      </div>
    )
  }
}

export default MarketDashboard
