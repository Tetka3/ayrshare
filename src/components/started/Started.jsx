import "./Started.scss";
import Add from "../../assets/points.png";

const Started = () => {
  return (
    <div className="started">
       <div className="started">
                <div className="points">
                    <img src={Add} alt="points"/>
                </div>
                <div className="informed">
                    <h3>It's easy to get started.</h3>
                    <h3>Start posting today!</h3>
                    <p>Social media APIs to help you achieve your goals.</p>
                    <button>Get Started Now</button>
                </div>
            </div>
    </div>
  )
}

export default Started