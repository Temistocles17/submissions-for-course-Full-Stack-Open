import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


   
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState([0,0,0,0,0,0,0,0])


  function getRandomInt(max) {
    return Math.floor(Math.random() * (max));
  }

  const NewAnecdote = () => {
    setSelected(getRandomInt(anecdotes.length))
  } 

  const NextButton = () => {
    return <button onClick={NewAnecdote}>new anecdote</button>
  }

  const VoteButton = () => {
    return <button onClick={Vote}>vote</button>
  }

  const Vote = () => {
    const copy=[...votes]
    copy[selected]+=1
    setVotes(copy)
  }

  function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    return maxIndex;
  }

  const ShowAnecdotes = ({index}) => {
    return (
      <p>{anecdotes[index]}</p>
    )
  }

  const ShowVotes = ({index}) => {
    return (
      <p>has {votes[index]} votes</p>
    )
  }
  

  //console.log("selected: ",selected)
  //console.log("votes:", votes)
  return (
    <div>
      <h1>Anecdote of hte day</h1>
      <ShowAnecdotes index={selected}/>
      <ShowVotes index={selected}/>
      <NextButton />
      <VoteButton />
      <h1>Anecdote with most votes</h1>
      <ShowAnecdotes index={indexOfMax(votes)}/>
      <ShowVotes index={indexOfMax(votes)}/>
     
    </div>
  )
}

export default App