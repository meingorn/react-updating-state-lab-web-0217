import React from 'react'

class DigitalClicker extends React.Component{
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return(
      <div>
        <button id="digital-clicker" onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker
