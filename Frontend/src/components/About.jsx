import React from 'react'
import {Link} from "react-router-dom";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we are serious about is food.</p>
          </div>
          <p className='mid'>At BHUV, we believe great food brings people together. Our dishes are crafted with fresh ingredients, bold flavors, and a passion for quality. Every plate we serve is prepared with care, ensuring a memorable dining experience for our customers.We don’t just serve food — we serve happiness, warmth, and moments worth sharing.</p>
         <a href="#menu" style={{textDecoration:"none"}}>Explore Menu <span>
          <HiOutlineArrowNarrowRight/>
            </span> 
          </a>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  )
}

export default About