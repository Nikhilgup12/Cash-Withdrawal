import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {rupees: 2000}

  onWithdraw = id => {
    const {rupees} = this.state
    if (id === 1) {
      this.setState(each => ({rupees: each.rupees - 50}))
    }
    if (id === 2) {
      this.setState(each => ({rupees: each.rupees - 100}))
    }
    if (id === 3) {
      this.setState(each => ({rupees: each.rupees - 200}))
    }
    if (id === 4) {
      this.setState(each => ({rupees: each.rupees - 400}))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {rupees} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <div className="user-section">
            <div className="user-name">
              <h1 className="user-word"> S </h1>
            </div>
            <h1 className="user-heading"> Sarah Williams </h1>
          </div>
          <div className="balance-section">
            <p className="balance-heading"> Your Balance </p>
            <div>
              <p className="rupes-heading"> {rupees} </p>
              <p className="rupees-para"> in Rupees </p>
            </div>
          </div>
          <p className="withdraw-heading"> Withdraw </p>
          <p className="withdraw-para"> Choose SUM (IN RUPEES) </p>
          <ul className="rupees-container">
            {denominationsList.map(each => (
              <DenominationItem
                buttonList={each}
                onWithdraw={this.onWithdraw}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
