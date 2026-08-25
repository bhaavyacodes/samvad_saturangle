import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ThroughYears from './pages/ThroughYears.jsx'

// The whole site has exactly three pages, wired up with React Router.
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/through-the-years" element={<ThroughYears />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
