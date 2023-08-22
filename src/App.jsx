import React from 'react'
import Navbar from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import data from './data.jsx'



export default function App(){

  const cards = data.map(infoFromData=> {
    return (
     <Card 
        key={infoFromData.id}
        {...infoFromData}       
      />
    )
  })

 


  return(
    <div className="container">
        <Navbar 
          img="/images/airLogo.svg"
        />
        <Hero 
          img="/images/heroMini.svg"
        /> 
        <section className="card-list">
          {cards}
        </section>
        <Footer />
    </div>  
  )
}
