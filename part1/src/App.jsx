import { useState } from 'react'

const Statistics = (props) => {
  if (props.click === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h2>statistics</h2>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.click}</p>
        <p>average {props.average/props.click}</p>
        <p>positive {(props.good/props.click)*100}%</p>
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [click, setClick] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setClick(click + 1)
    setAverage(average + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setClick(click + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setClick(click + 1)
    setAverage(average - 1)
  }

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <div>
          <button onClick={() => handleGood()}>
            good
          </button>
          <button onClick={() => handleNeutral()}>
            neutral
          </button>
          <button onClick={() => handleBad()}>
            bad
          </button>
        </div>
      </div>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} click={click} average={average}/>
      </div>
    </div>
  )
}

export default App