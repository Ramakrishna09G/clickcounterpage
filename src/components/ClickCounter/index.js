// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter-page-bg-container">
        <div className="counter-page-container">
          <h1 className="main-heading">
            The Button has been clicked <i className="counter">{count}</i> times
          </h1>
          <p className="description">Click the button to increase the count!</p>
          <button className="button-1" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
