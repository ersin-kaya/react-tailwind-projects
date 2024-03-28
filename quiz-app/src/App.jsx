import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Introduce from './pages/Introduce/Introduce'
import Quiz from './pages/Quiz/Quiz'
import { ToastContainer } from 'react-toastify';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Introduce />} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App
