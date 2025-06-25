import './navbar.scss'
import React, { useContext } from 'react'
import { iconsImgs } from "../../utils/images.js";
import { DarkModeContext } from '../../context/darkModeContext.js';

function Navbar() {
  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" name="" id="" placeholder='Search...'/>
          <img src={iconsImgs.search} alt="" />
        </div>
        <div className="items">
          <div className="item">
            <img src={iconsImgs.globe} alt="" />
            <span>English</span>
          </div>
          <div className="item">
            <img src={iconsImgs.sleep} alt="" onClick={() => dispatch ({ type: "TOGGLE"})}/>
          </div>
          <div className="item">
            <img src={iconsImgs.notifications} alt="" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <img src={iconsImgs.reviewlike} alt="" />
            <div className="counter">12</div>
          </div>
          <div className="item">
            <img src={iconsImgs.profile} alt="" className='avatar'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar