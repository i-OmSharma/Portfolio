import Hero from "./components/homePage/Hero"
import Navbar from "./components/ui/Navbar"
import Footer from "./components/ui/Footer"
import About from "./components/homePage/About"
import Quote from "./components/homePage/Quote"
import Service from "./components/homePage/Service"
import Project from "./components/homePage/Project"
import Contact from "./components/homePage/Contact"
import { useLenis } from "lenis/react"

function App() {

  useLenis()

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <main>
          <Quote />
          <About />
          <Service />
          <Project />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
