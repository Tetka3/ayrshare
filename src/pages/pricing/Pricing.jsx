
import Navbar from "../../components/navbar/Navbar";
import Footer from '../../components/footer/Footer';
import "./Pricing.scss";
import Started from "../../components/started/Started";

const Pricing = () => {
  return (
    <div className="pricing">
        <Navbar />
        <div className="container">
            <div className="top1">
                <h1>Pricing</h1>
                <p>Sign up today for the Ayrshare API and start managing all your users' social media needs.</p>
            </div>
            <div className="top2">
                <div className="top2Left">
                    <h2>Business Plan Accounts For Platforms</h2>
                    <p>If you manage multiple user accounts, then contact us to get pricing details. Starts at $499 per month.</p>
                </div>
                <div className="top2Right">
                    <button>Contact Us</button>
                </div>
            </div>
            <div className="top3">
                <div className="basic">
                    <p>Basic</p>
                    <p className="free">Free</p>
                    <p>Get Started For Free</p>
                    <p>20 Real-Time Posts / month</p>
                </div>
                <div className="premium">
                    Premium
                </div>
                <div className="business">
                    Business
                </div>
            </div>
            <div className="questions">
                <h2>Frequently Asked Questions</h2>
            </div>
            <div className="agency">
                <h6>Do you offer multi-user or agency plans?</h6>
                <p>We offer discounted plans to agencies, platforms, and many types of businesses who have multiple users. Learn more about our Business plan.</p>
            </div>
            <div className="agency">
                <h6>What payment methods do you accept?</h6>
                <p>You can pay with any major credit or debit card. Payments are handled securely by Stripe.</p>
            </div>
            <div className="agency">
                <h6>Where can I find your SDK packages?</h6>
                <p>We have packages for Node.js, Python, Bubble, and Airtable. You can find these in our docs.</p>
            </div>
            <div className="agency">
                <h6>Can I cancel at any time?</h6>
                <p>Yes you can cancel at any time. You are not locked into a long term commitment. Click the cancel button in the web dashboard or send us an email and we will cancel your account with no questions asked.</p>
            </div>
            <div className="agency">
                <h6>How many social networks can I connect with the Premium plan?</h6>
                <p>Each Premium account allows you to have one connection to each of the 10 available social networks. This means 1 Facebook, 1 Twitter, 1 Instagram, 1 TikTok, etc. One API post call can send a post to multiple social networks. For example, you can make one call to the /post endpoint and specify the post should go to YouTube, TikTok, and Instagram. This counts as a single post.</p>
            </div>
            <div className="contact">
                <p>Contact Us For Business Plan Details</p>
            </div>
            <div className="form">
                <form className="fill">
                    <label>Your name</label>
                    <input type="text"/>
                    <label>Business email address</label>
                    <input type="email"/>
                    <label>Business name</label>
                    <input type="text"/>
                    <label>Business Website</label>
                    <input type="text"/>
                    <label>Please tell us about your business and it's social media needs</label>
                    <textarea/>
                </form>
            </div>
            <div className="info">
                <p>How did you find us?</p>
                <select>
                    <option>-Please choose an option-</option>
                    <option>Google search</option>
                    <option>Other search engines</option>
                    <option>Google Ad</option>
                    <option>Linkedin</option>
                    <option>Referral fron an Aryshare Client</option>
                </select>
                <button>Submit</button>
            </div>            
        </div>
        <Started />
        <Footer />
    </div>
  )
}

export default Pricing;