import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
// import Showcases from './pages/showcases/Showcases'
// import ShowcasesPreview from './components/showcasesPreview/ShowcasesPreview'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              {/* <ShowcasesPreview />
              Future sections like Setores go here */}
              <Contact />
            </>
          }
        />
        {/* <Route path="/showcases" element={<Showcases />} /> */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
