import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {
    isEvenOrOdd: 'Even',
    count: 0,
  }

  increaseCount = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => {
      const updateCount = randomNumber + prevState.count
      if (updateCount % 2 === 0) {
        return {
          isEvenOrOdd: 'Even',
          count: updateCount,
        }
      }

      return {
        isEvenOrOdd: 'Odd',
        count: updateCount,
      }
    })
  }

  render() {
    const {count, isEvenOrOdd} = this.state
    return (
      <div className="even-odd-bcg-container">
        <h1 className="count-heading"> Count {count} </h1>
        <p className="even-odd-heading"> Count is {isEvenOrOdd} </p>
        <button
          onClick={this.increaseCount}
          className="increment-button"
          type="button"
        >
          {' '}
          Increment{' '}
        </button>
        <p className="increase-number-title">
          {' '}
          *Increase By Random Number Between 0 to 100{' '}
        </p>
      </div>
    )
  }
}

export default EvenOddApp
