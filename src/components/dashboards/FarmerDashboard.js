import React, { Component } from 'react';
import "../../index.css"

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
            <dt>Total cows</dt><dd>{this.props.farmer.myFarm.cows.total}</dd>
            </>
          )}
          {this.props.farmer.myFarm && (<>
            <dt>Total straw</dt><dd>{this.props.farmer.myFarm.straw.total} {this.props.farmer.myFarm.straw.unit}</dd>
            <dt>Total milk</dt><dd>{this.props.farmer.myFarm.milk.total} {this.props.farmer.myFarm.milk.unit}</dd>
            <dt>Total beef</dt><dd>{this.props.farmer.myFarm.beef.total} {this.props.farmer.myFarm.beef.unit}</dd>
            <dt>Total seeds</dt><dd>{this.props.farmer.myFarm.seeds.total} {this.props.farmer.myFarm.seeds.unit}</dd>
            <dt>Total egg</dt><dd>{this.props.farmer.myFarm.egg.total} {this.props.farmer.myFarm.egg.unit}</dd>
            <dt>Total wool</dt><dd>{this.props.farmer.myFarm.wool.total} {this.props.farmer.myFarm.wool.unit}</dd>
            <dt>Total chicken</dt><dd>{this.props.farmer.myFarm.chicken.total} {this.props.farmer.myFarm.chicken.unit}</dd>
            <dt>Total lamb</dt><dd>{this.props.farmer.myFarm.lamb.total} {this.props.farmer.myFarm.lamb.unit}</dd>

            </>
          )}
        </dl>
        <button onClick={this.hideUI}>Hide UI</button>
      </div>
    )
  }
}

export default FarmerDashboard;