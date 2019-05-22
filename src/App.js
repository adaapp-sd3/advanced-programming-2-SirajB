import React, { Component } from "react"
import FarmManager from "./components/FarmManager"
import "./App.css"
import p5 from "p5"
import makeFarm from "./p5Setup"
import Farm from "./models/Farm"
import Farmer from "./models/Farmer"
import Market from "./models/Market"
import request from "request"

const apiId = "d25ed5bd07243e88a2c2eee1e17cba04"

class App extends Component {
  // all instances live on the state
  state = {
    farmer: new Farmer(),
    farm: new Farm(),
    market: new Market(),
    weatherIcon: Boolean = false
  }

  // allow instances to to tell us when they change
  handleUpdateState = newThing => {
    this.setState(newThing)
  }

  //
  componentDidMount() {
    let sketch = makeFarm(
      this.state.farm,
      this.state.farmer,
      this.state.market,
      this.handleUpdateState
    )
    this.setState({
      myP5: new p5(sketch, "sketch")
    })

    this.weather()
  }

  weather() {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiId}`
    request(url, (err, response, body) => {
      if (err) {
        console.log("Error: ", err)
      } else {
        console.log("Worked")
        const json = JSON.parse(body)

        this.setState({ imgSrc: `http://openweathermap.org/img/w/${json.weather[0].icon}.png` })
        this.setState({ value: (`${Math.round(json.main.temp - 273.15)}°C ${json.weather[0].main}`) })
        this.setState({ showWeatherIcon: true })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            <img src="/img/farmer.png" className="App-logo" alt="logo" />{" "}
            Dashboard
          </h2>
          <div className="Weather">
            <h3 ref="WeatherTemperature">{this.state && this.state.value}</h3>
            {this.state.showWeatherIcon && <img ref="WeatherIcon" alt="Weather" src={this.state.imgSrc}></img>}
          </div>
        </header>
        <FarmManager farmer={this.state.farmer} farm={this.state.farm} market={this.state.market} />
      </div>
    )
  }
}

export default App
