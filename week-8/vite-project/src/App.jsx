import React, { useState, useEffect } from "react"

function App() {
  const [counter, setCount] = useState(0);
  let [counterVisible, setcounterVisible] = useState(true);
  useEffect(function () {
    setInterval(function () {
      setcounterVisible(function (c) {
        return c = !c
      })
    }, 5000)
  }, [])

  return (
    <>
      <b>Counter</b>
      {counterVisible ? <Counter></Counter> : null}

    </>
  )
}

//counter
function Counter() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  function increment() {
    setCount(count + 1);
  }

  function decreaser() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  //timer
  //hooking in to life cycle event of react 
  // mounting, re-rendering, unmounting 
  useEffect(function () {
    console.log("on mount")
    let clock = setInterval(function () {
      // setTimer(timer => timer + 1)
      console.log("From inside setInterval")
      setTimer(function (timer) {
        return timer + 1
      })
    }, 1000)

    return function () {
      console.log("on umount")
      clearInterval(clock)
    }

  }, [])





  return (
    <>
      <h1>
        {count}
      </h1>
      <button onClick={increment}>Increaser</button>
      <button onClick={decreaser}>Decreaser</button>
      <button onClick={reset}>Reset</button>
      <br></br>
      <h1>
        {timer}
      </h1>
    </>
  )
}

export default App
