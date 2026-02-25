import React from 'react'
import Navbar from '../components/Navbar';


const HeroSection = () => {
  return (
    <section className='heroSection' id="heroSection">
      <Navbar/>
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className='title'><b><i>Fantastic `'</i></b></h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="/hero_1.jpeg" alt="hero1" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className='title'><b>Flavour</b></h1>
              </div>
              <img src="/res_logo.png" alt="logo" className='logo' />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="/hero2.jpeg" alt="" />
          </div>
          <h1 className='title dishes_title'><b><i>Foods</i></b></h1>
        </div>
      </div>
    </section>
  )
}

export default HeroSection