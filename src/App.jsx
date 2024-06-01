import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Element } from 'react-scroll'
import Fqas from './components/Fqas'
import AboutUs from './components/AboutUs'
function App() {

  return (
    <div className='bg-black'>
      <header>
        <Navbar />
      </header>
      <main >
        <Element name='/Home'>
          <Home id="/Home" />
        </Element>
        <Element name='/About'>
          <AboutUs id="/About" />
        </Element>
        <Element name='/Fqas'>
          <Fqas id="/Fqas" />
        </Element>
      </main>
    </div>
  )
}

export default App
