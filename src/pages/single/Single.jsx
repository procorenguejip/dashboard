import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Chart from '../../components/chart/Chart'
import { personsImgs } from '../../utils/images'
import './single.scss'

import React from 'react'
import List from '../../components/table/Table'

function Single() {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={personsImgs.person_ivana} alt="" className="itemImg"/>
              <div className="details">
                <h1 className="itemTitle">Jehu Procore</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">jehuprocore@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+39 3486877951</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Paderno Dugnano, Milano</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Italy</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={ 3/1 } title="User Spending ( Last 6 months )" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single