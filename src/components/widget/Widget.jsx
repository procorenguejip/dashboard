import "./widget.scss"
import { iconsImgs } from "../../utils/images.js";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "customer":
      data = {
        title: "CUSTOMERS",
        isMoney: false,
        link: "See all customers",
        icon: <img src={iconsImgs.customers} alt="" className="img customer"/>
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See all orders",
        icon: <img src={iconsImgs.cardcheck} alt="" className="img order"/>
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: false,
        link: "View net earnings",
        icon: <img src={iconsImgs.walletearning} alt="" className="img earning"/>
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: false,
        link: "See details",
        icon: <img src={iconsImgs.balance} alt="" className="img balance"/>
      };
      break;
    default:
      break;
  }
  
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">23456</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <img src={iconsImgs.uparrow} alt="" className="icon"/> 20%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget