import { useState } from 'react'
import { Children } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div style={{display: "flex", background: "gray"}}>
    <Card>
      <div>
        write somethig
        <br>
        </br>
        <br>
        </br>
        <input type='text'></input>
      </div>
    </Card>

<Card>
  <div>
    <h3>Introduction</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</Card>
   </div>
  )
}

function Card({children}){
  return(
    <div style={{background: "black", borderRadius: 20, color: "white", margin: 20, padding: 20}  }>
      top bar
{children}
footer
    </div>
  )
}

const Todo = () => {
const todos = [{
  title: "got to gym",
  done: false
}]
}

export default App
