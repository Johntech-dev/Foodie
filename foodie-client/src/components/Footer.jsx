import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer className="footer xl:px-24 py-10 px-4  text-base-content">
  <aside>
    <img src='logo.png' />
    <p className='my-5 md:w-40'>savour the artistry where the dish is a culinary masterpiece</p>
  </aside> 
  <nav>
    <h6 className="footer-title">USEFUL LINKS</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Events</a>
    <a className="link link-hover">Blogs</a>
    <a className="link link-hover">FAQ</a>
  </nav> 
  <nav>
    <h6 className="footer-title">MAIN MENU</h6> 
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Offers</a>
    <a className="link link-hover">Menus</a>
    <a className="link link-hover">Reservation</a>
  </nav> 
  <nav>
    <h6 className="footer-title">CONTACT US</h6> 
    <a className="link link-hover">example@email.com</a>
    <a className="link link-hover">+44 706547878</a>
    <a className="link link-hover">Social Media</a>
  </nav>
</footer>
    </div>
  )
}

export default Footer