import React, { Component } from 'react';

class FarmerDashboard extends Component {

  hideUI = () => {
    this.props.farmer.showUI = false
  }

  render() {
    return (
      <div className="FarmerDashboard">
        <dl>
          <dt>Current budget</dt><dd>£{this.props.farmer.budget}</dd>
          {this.props.farmer.myFarm && (<>
            <dt>Total solar panel</dt><dd>{this.props.farmer.myFarm.solarPanel.total} {this.props.farmer.myFarm.solarPanel.unit}</dd>
            <dt>Total green gas</dt><dd>{this.props.farmer.myFarm.greenGas.total} {this.props.farmer.myFarm.greenGas.unit}</dd>
            <dt>Total cows</dt><dd>{this.props.farmer.myFarm.cows.total}</dd>
            </>
          )}
          {this.props.farmer.myFarm && (<>
            <dt>Total beef</dt><dd>{this.props.farmer.myFarm.beef.total} {this.props.farmer.myFarm.beef.unit}</dd>
            <dt>Total milk</dt><dd>{this.props.farmer.myFarm.milk.total} {this.props.farmer.myFarm.milk.unit}</dd>
            <dt>Total chickens</dt><dd>{this.props.farmer.myFarm.chickens.total} {this.props.farmer.myFarm.chickens.unit}</dd>
            <dt>Total chicken meat</dt><dd>{this.props.farmer.myFarm.chicken.total} {this.props.farmer.myFarm.chicken.unit}</dd>
            <dt>Total eggs</dt><dd>{this.props.farmer.myFarm.eggs.total} {this.props.farmer.myFarm.eggs.unit}</dd>
            <dt>Total sheep</dt><dd>{this.props.farmer.myFarm.sheep.total} {this.props.farmer.myFarm.sheep.unit}</dd>
            <dt>Total lamb</dt><dd>{this.props.farmer.myFarm.lamb.total} {this.props.farmer.myFarm.lamb.unit}</dd>
            <dt>Total wool</dt><dd>{this.props.farmer.myFarm.wool.total} {this.props.farmer.myFarm.wool.unit}</dd>
            <dt>Total straw</dt><dd>{this.props.farmer.myFarm.straw.total} {this.props.farmer.myFarm.straw.unit}</dd>
            <dt>Total corn</dt><dd>{this.props.farmer.myFarm.corn.total} {this.props.farmer.myFarm.corn.unit}</dd>
            <dt>Total seeds</dt><dd>{this.props.farmer.myFarm.seeds.total} {this.props.farmer.myFarm.seeds.unit}</dd>


            </>
          )}
        </dl>
        <button onClick={this.hideUI}>Hide UI</button>
      </div>
    )
  }
}

export default FarmerDashboard;