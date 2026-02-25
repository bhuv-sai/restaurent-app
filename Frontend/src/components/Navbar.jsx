import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {data} from '../restApi.json'
import { useState } from 'react'


const Navbar = () => {
  const [show,setShow]=useState(false);
  return (
    <nav>
      <div className="left">
        <div className="logo">BHUV</div>
          <div className="links">
            {
              data[0].navbarLinks.map(element=>{
                return (
                  <a href={element.link} key={element.id}>
                  {element.title}
                  </a>
                );
              })
            }
          </div>
        </div>
        <button className='menuBtn'><a href="#menu" style={{textDecoration:"none",color:"inherit"}}>OUR MENU</a></button>
      <div className="hamburger" onClick={()=>setShow(false)}>
        <GiHamburgerMenu/>
      </div>
    </nav>
  )
}
export default Navbar