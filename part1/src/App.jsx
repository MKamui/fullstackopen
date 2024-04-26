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
        <StatisticLine text="good:" value={props.good}/>
        <StatisticLine text="neutral:" value={props.neutral} />
        <StatisticLine text="bad:" value={props.bad} />
        <StatisticLine text="all:" value={props.click} />
        <StatisticLine text="average:" value={props.average/props.click} />
        <StatisticLine text="positive:" value={(props.good/props.click)*100 + "%"} />
      </div>
    )
  }
}

const Button = (props) => (
  <button onClick={() => props.function()}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <p>{props.text} {props.value}</p>
)

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
          <Button function={handleGood} text="good"/>
          <Button function={handleNeutral} text="neutral"/>
          <Button function={handleBad} text="bad"/>
        </div>
      </div>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} click={click} average={average}/>
      </div>
    </div>
  )
}

export default App