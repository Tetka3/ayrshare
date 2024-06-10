import "./Home.scss";
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
  return (
    <div className="home">
      <div className="top">
        <p>Need to post to your users social networks? Learn more about the Business Plan</p>
      </div>
      <Navbar />
      <div className="container">
        <div className="left">
          <h1>Social Media APIs</h1>
          <p>Powerful APIs that enable you to send social media posts effortlessly. For developers and businesses of all sizes.</p>
          <button>Get Started Now</button>
        </div>
        <div className="right">
          Yap
        </div>

        
      </div>
    </div>
  )
}

export default Home;
