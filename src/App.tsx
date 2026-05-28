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
import ScrollToTop from './components/scrollToTop/ScrollToTop'
import Showcases from './pages/showcases/Showcases'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import TermsOfUse from './pages/legal/TermsOfUse'
import CookiePolicy from './pages/legal/CookiePolicy'
import CookieBanner from './components/cookieBanner/CookieBanner'

function App() {
  return (
    <Router>
      <ScrollToTop />
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
        <Route
          path="/showcases"
          element={
            <>
              <Showcases />
              <Contact />
            </>
          }
        />
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
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos-de-uso" element={<TermsOfUse />} />
        <Route path="/politica-de-cookies" element={<CookiePolicy />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </Router>
  )
}

export default App

