import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
// import Showcases from './pages/showcases/Showcases'
// import ShowcasesPreview from './components/showcasesPreview/ShowcasesPreview'
import Contact from './components/contact/Contact'
import ContactUs from './pages/contactUs/ContactUs'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import Solutions from './pages/solutions/Solutions'
import Sectors from './pages/sectors/Sectors'
import SolutionDetail from './pages/solutionDetail/SolutionDetail'
import SectorDetail from './pages/sectorDetail/SectorDetail'

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
        <Route
          path="/solucoes"
          element={
            <>
              <Solutions />
              <Contact />
            </>
          }
        />
        <Route
          path="/solutions/:slug"
          element={
            <>
              <SolutionDetail />
              <Contact />
            </>
          }
        />
        {/* <Route path="/showcases" element={<Showcases />} /> */}
        <Route
          path="/setores"
          element={
            <>
              <Sectors />
              <Contact />
            </>
          }
        />
        <Route
          path="/setores/:slug"
          element={
            <>
              <SectorDetail />
              <Contact />
            </>
          }
        />
        <Route
          path="/sobre"
          element={
            <>
              <About />
              <Contact />
            </>
          }
        />
        <Route
          path="/contato"
          element={
            <>
              <ContactUs />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
