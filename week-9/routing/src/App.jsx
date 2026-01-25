import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/neet/online-coaching-class-11" element={<Class11Progam />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Progam />} />
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Nopage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

function Layout() {
  return (<div style={{height: "100vh", background:"green"}}>
    <Link to="/">Home</Link>
    <Link to="/neet/online-coaching-class-11">class 11</Link>
    <Link to="/neet/online-coaching-class-12">class 12</Link>
    <div style={{height: "90vh", background: "purple"}}>
      <Outlet />
    </div>
    Footer | Contact

  </div>)
}

function Nopage() {
  return (<div>
    Page not found 404 error....
  </div>)
}

function Landing() {
  return (<div>
    <h1>welcome to allen</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, nisi id minima porro voluptate dolores, accusamus alias nostrum, magnam corrupti ea quae architecto eos. Quidem dolorem magni placeat eius ipsa?</p>
  </div>)
}

function Class11Progam() {
  return (<div>
    Neet program class 11
  </div>)
}
function Class12Progam() {
  const navigate = useNavigate()
  function goback() {
    navigate("/")
  }

  return (<div>
    Neet program class 12
    <button onClick={goback}>Go to home</button>
  </div>)
}
export default App
