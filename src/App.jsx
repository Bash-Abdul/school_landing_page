import Hero from "./components/hero"
import Navbar from "./components/navbar"
import data from "./components/data"
import Module from "./components/module"
// import M_container from "./components/module_container"
import Footer from "./components/footer"


function App() {


  const displayData = data.map((module) =>{
    return(
      <Module
    
    key={module.id}
    {...module}
    
    />
    )
  })


 
  return (
    <div>
      <Navbar/>
      <Hero/>
      {displayData}
      {/* <M_container/> */}
      <Footer/>
    </div>
  )
}

export default App
