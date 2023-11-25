import { BrowserRouter, Routes , Route } from "react-router-dom";
import './App.css'

import Signup from './components/Signup/App.jsx'
import Home from './components/Home/App.jsx'
import Login from './components/Login/App.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;