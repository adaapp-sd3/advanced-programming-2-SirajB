import React, { Component } from "react"
import "../../App.css"
class FieldDashboard extends Component {

  milkCows = () => {
    for (var i=0; i<this.props.field.contents.length; i++) {
      this.props.field.contents[i].yieldMilk()
    }
  }

  yieldBeef = () => {
    const length = this.props.field.contents.length
    const mid = length/2
    let cows = this.props.field.contents[0].farm.cows
    for (let i=length-1; i>mid; i--) {
      cows.objects[i].yieldBeef()
    }
  }

  
  
  shearSheep = () => {
    for (var i=0; i<this.props.field.contents.length; i++) {
      this.props.field.contents[i].yieldWool()
    }  
  }

  yieldLamb = () => {
    const length = this.props.field.contents.length
    const mid = length/2
    let sheep = this.props.field.contents[0].farm.sheep
    for (let i=length-1; i>mid; i--) {
      sheep.objects[i].yieldLamb()
    }
  }
  
  getEggs = () => {
    for (var i=0; i<this.props.field.contents.length; i++) {
      this.props.field.contents[i].yieldEgg()
    }
  }

  yieldChicken = () => {
    const length = this.props.field.contents.length
    const mid = length/2
    let chickens = this.props.field.contents[0].farm.chickens
    for (let i=length-1; i>mid; i--) {
      chickens.objects[i].yieldChicken()
    }
  }
  
  render() {
    return (
      <div className="FieldDashboard">
        <h2>Field</h2>
        {this.props.field.contents[0] && (
          <p>
            In this field you have {this.props.field.contents.length}{" "}
            {this.props.field.contents[0].name}s
            {this.props.field.contents[0].name === "Cow" && (
              <div>
                <button onClick={this.milkCows}>Milk them</button>
                <button onClick={this.yieldBeef}>Get beef from half the cows</button>
              </div>
              )}
            {this.props.field.contents[0].name === "Sheep" && (
              <div>
              <button onClick={this.shearSheep}>Sheer them</button>
              <button onClick={this.yieldLamb}>Get lamb from half the sheep</button>
            </div>
            )}
            {this.props.field.contents[0].name === "Chicken" && (
              <div>
              <button onClick={this.getEggs}>Gather eggs</button>
              <button onClick={this.yieldChicken}>Get chicken from half the chicken</button>
            </div>
            )}
          </p>
          
        )}
        {this.props.field.contents.map((item, i) => (
          <>
            {item.showUI && (
              <div className="fieldItem">
                <h3><img src={item.imgUrl} alt={item.name} /> {item.name}</h3>
                <dl>
                  <dt>Hunger</dt><dd>{item.hunger}</dd>
                </dl>
              </div>
            )}
          </>
        ))}
      </div>
    )
  }
}

export default FieldDashboard
