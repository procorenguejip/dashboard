import "./featured.scss"
import { iconsImgs } from "../../utils/images.js";
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <img src={iconsImgs.verticalmenu} alt="" />
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} strokeWidth={3}/>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">$420,00</p>
            <p className="desc">
                Previous transactions processing. Last payments may not be included.
            </p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult">
                        <img src={iconsImgs.downarrow} alt="" />
                        <div className="resultAmount">€12,000.45</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult">
                        <img src={iconsImgs.downarrow} alt="" />
                        <div className="resultAmount">€12,000.45</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult">
                        <img src={iconsImgs.downarrow} alt="" />
                        <div className="resultAmount">€12,00.45</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured