//Fucnction declarations

const Header = (props) => {
  return <h1> {props.title} </h1>
}

const Part = (props) => {
  return <p>
           {props.part.name} {props.part.number}
         </p>
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
} 

const Total = (props) => {
  let count=0
  props.parts.forEach (part => {count+=part.number})

  return (
    <p>Number of exercises {count}</p>
  )
}



//Main

const App = () => {
  //Variable declaration
  const course = {
    
    title:'Half Stack application development',

    parts: [
      {name:'Fundamentals of React', number:10},
      {name:'Using props to pass data', number:7},
      {name:'State of a component', number:14}
    ]
  }

  //Program execution
  return (
    <div>
      <Header title={course.title}/>

      <Content parts={course.parts}/>
     
      <Total parts={course.parts}/>

    </div>
  )
}

export default App