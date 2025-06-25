import './new.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { iconsImgs, imagesImgs } from "../../utils/images.js";
import React from 'react'

function New() {
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add new User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={imagesImgs.image_no_icon} alt="" />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">Image <img src={iconsImgs.upload} alt="" className='icon'/></label>
                <input type="file" name="file" id="username" placeholder='file' className='file'/>
              </div>
              <div className="formInput">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder='Jehu_Procore'/>
              </div>
              <div className="formInput">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder='Jehu'/>
              </div>
              <div className="formInput">
                <label htmlFor="surname">Surname</label>
                <input type="text" name="surname" id="surname" placeholder='Procore'/>
              </div>
              <div className="formInput">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='Jehu_Procore@gmail.com'/>
              </div>
              <div className="formInput">
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" id="phone" placeholder='+39 000 000 1122'/>
              </div>
              <div className="formInput">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='***********'/>
              </div>
              <div className="formInput">
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" placeholder='Via sample, 21, Comune, 0000'/>
              </div>
              <div className="formInput">
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" placeholder='City'/>
              </div>
              <div className="formInput">
                <label htmlFor="country">Country</label>
                <input type="text" name="country" id="country" placeholder='Cameroon'/>
              </div>
              <input type="button" value="Send" className='button'/>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New