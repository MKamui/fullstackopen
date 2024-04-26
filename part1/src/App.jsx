import { useState } from 'react'

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
        <h2>statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {click}</p>
        <p>average {average/click}</p>
        <p>positive {(good/click)*100}%</p>
      </div>
    </div>
  )
}

export default App