import About from "./componenets/About"
import ContactLinks from "./componenets/contact"
import Hero from "./componenets/hero"
import Navbar from "./componenets/navbar"
import Services from "./componenets/services"
import Timeline from "./componenets/Timeline"


function App() {
  

  return (
    <div className="main">
      
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Timeline/>
      <ContactLinks/>
      
      

    </div>
  )
}

export default App
