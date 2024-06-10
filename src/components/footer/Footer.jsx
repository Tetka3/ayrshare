
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sections">
        <div className="aryshare">
        <p>Aryshare</p>
          <p>142 W 57 Street</p>
          <p>New York, NY 10019</p>
          <ul>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Data Protection Agreement</li>
            <li>We're Hiring</li>    
          </ul> 
        </div>
        <div className="learn">
          <label>Learn More</label>
            <ul>
                <li>Business Plan: Manage multiple user accounts</li>
                <li>Creator Data API</li>
                <li>Automatically post your RSS Fee & Substack</li>
                <li>Image Generation API</li>
                <li>Status Page</li>
                <li>iOS App | Android App</li> 
                <li>Blog | Podcast</li>
                <li>Ayrlink Link in Bio</li>
                <li>Professional services</li>   
            </ul> 
        </div>
        <div className="integration">
          <label>SDKs & Integrations</label>
            <ul>
                <li>NPM Node.j Package</li>
                <li>PyPI Python Package</li>
                <li>Flutter Package</li>
                <li>Oracle Integration</li>
                <li>Airtable Integration</li>
                <li>Bubble Integration</li>
                <li>All Integrations</li>    
            </ul> 
        </div>
      </div>
      <div className="compare">
        <label>Compare</label>
        <ul>
            <li>NPM Node.js Package</li>
            <li>PyPI Python Package</li>
            <li>Flutter Package</li>
            <li>Oracle Integration</li>
            <li>Airtable Integration</li>
            <li>Bubble Integration</li>
            <li>All Integrations</li>    
        </ul>
        <button>Subscribe to the Newsletter</button>
      </div>
    </div>
  )
}

export default Footer