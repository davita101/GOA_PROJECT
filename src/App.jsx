import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Element } from 'react-scroll'
import Fqas from './components/Fqas'
import AboutUs from './components/AboutUs'
import Button from './components/Button'
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
        <Element name='/Contact'>
          <Fqas id="/Fqas" />
        </Element>
      </main>
      <footer className='flex justify-center pb-[1rem] '>
        <a href='https://www.facebook.com/messages/t/100007557528695' target='_blank'><Button value={'JOIN TODAY'} className={"text-[white] lg:text-[2rem] text-[1rem]"} /></a>
      </footer>
    </div>
  )
}

export default App
