import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header.jsx'
import About from './pages/about-me.jsx'
import Experience from './pages/experiences.jsx'
import Stories from './pages/stories.jsx'
import Skills from './pages/skills.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="Header">
        <Header />
      </div>

      <Routes>
        <Route path="/about-me" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/my-story" element={<Stories />} />
        {/*<Route path="/about-me/hobbies" element={<Hobbies />}/>
        <Route path="/about-me/family" element={<Family />}/>
        <Route path="/about-me/objectives" element={<Objectives />}/>
        <Route path="/experience/skills" element={<Hobbies />}/>
        <Route path="/about-me/hobbies" element={<Hobbies />}/>
        <Route path="/about-me/hobbies" element={<Hobbies />}/>
        <Route path="/about-me/hobbies" element={<Hobbies />}/>
        <Route path="/about-me/hobbies" element={<Hobbies />}/>
        <Route path="/about-me/hobbies" element={<Hobbies />}/>
        */}
      </Routes>
    
      
      </>
  )
}

export default App
