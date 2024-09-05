import React from 'react'
// import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer-container bg-gray-800 text-white py-10">
    <div className="footer-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">IN/EN</h3>
          <ul>
            <li>Site Map</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Account</h3>
          <ul>
            <li>My Account</li>
            <li>Order Status</li>
            <li>Profile Settings</li>
            <li>My Products</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <ul>
            <li>Support Home</li>
            <li>Contact Technical Support</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect with Us</h3>
          <ul>
            <li>Community</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Offerings</h3>
          <ul>
            <li>Artificial Intelligence</li>
            <li>Products</li>
            <li>Solutions</li>
            <li>Services</li>
            <li>Deals</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Company</h3>
          <ul>
            <li>Who We Are</li>
            <li>Careers</li>
            <li>Dell Technologies Capital</li>
            <li>Investors</li>
            <li>Newsroom</li>
            <li>Perspectives</li>
            <li>Recycling</li>
            <li>ESG & Impact</li>
            <li>Customer Stories</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Partners</h3>
          <ul>
            <li>Find a Partner</li>
            <li>OEM Solutions</li>
            <li>Partner Program</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Dell Rewards</li>
            <li>Events</li>
            <li>Email Sign-Up</li>
            <li>Privacy Centre</li>
            <li>Resource Library</li>
            <li>Security & Trust Centre</li>
            <li>Trial Software Downloads</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
