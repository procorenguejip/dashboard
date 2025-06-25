import { DarkModeContext } from '../../context/darkModeContext.js';
import { navigationLinks } from '../../data/data.js'
import './sidebar.scss'
import React, { useContext, useState } from 'react'
import {
  Link,
} from "react-router-dom";

function Sidebar() {
  const [activeLinkIdx] = useState(1);
  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/">
                <span className="logo">buyandsell.admin.</span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            {
                navigationLinks.map((navigationLink) => (
                    <>
                        <div className="group-menu">
                            <p className="title" key = { navigationLink.id }>{navigationLink.title.descr }</p>
                        </div>
                        
                        <ul>
                            {navigationLink.items.map((navigationLinkItem) => (
                                <Link to={navigationLinkItem.link} className="itemLink">
                                    <li className="item" key = { navigationLinkItem.id }>
                                        <img src={ navigationLinkItem.image } className="icon" alt = { navigationLinkItem.title } />
                                        <span className="item-text">{ navigationLinkItem.title }</span>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </>
                ))
            }
            
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={() => dispatch ({ type: "LIGHT"})}></div>
            <div className="colorOption" onClick={() => dispatch ({ type: "DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar