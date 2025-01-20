import { useState } from 'react'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () =>{
    setGood(good+1)
    console.log("good=",good+1)
  
  } 

  const handleNeutral = () =>{
    setNeutral(neutral+1)
    console.log("neutral=",neutral+1)
  
  } 

  const handleBad = () =>{
    setBad(bad+1)
    console.log("bad=",bad+1)
  
  } 

  const Header = () => {
    return <h1>Give Feedback</h1>
  }

  const Button = ({functionHandler,text}) => {
    return <button onClick={functionHandler}>{text}</button>
  }

  const Buttons = () => {
    return (
      <>
        <Button functionHandler={handleGood} text="good" />
        <Button functionHandler={handleNeutral} text="neutral" />
        <Button functionHandler={handleBad} text="bad" />
      </>
    )
  }

  const StatisticLine = ({value,text}) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
      )
  }

  const ShowStatistics = () => {
    return (
      <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={good+neutral+bad}/>
          <StatisticLine text="average" value={(good-bad)/(good+neutral+bad)}/>
          <StatisticLine text="positive" value={(100*good)/(good+neutral+bad)+"%"}/>
        </tbody>
      </table>
    </>
    )
  }

  const HideStatistics = () => {
    return (
      <p>No feedback given</p>
    )
  }

  const Statistics = () => {
    var data=""
    if ((good+neutral+bad)==0){
      data=HideStatistics()
    }
    else {
      data=ShowStatistics()
    }
    return data
  }



  
  return (
    <div>
      <Header/>
      <Buttons/>
      <Statistics/>
    </div>
  )
}

export default App




