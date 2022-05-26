import React from 'react'
import './Apple.css';
import {AiFillApple,AiOutlineSearch,AiFillPlayCircle,AiOutlineCopyrightCircle} from 'react-icons/ai';
import {BsFillBagFill} from 'react-icons/bs';
import {FiArrowUpRight} from 'react-icons/fi';
import {MdKeyboardArrowRight} from 'react-icons/md';
import one from "./Images/one.jpg";
import airs from "./Images/airs.jpg";
import studio from "./Images/studio.jpg";
import mobile from "./Images/mobile.jpg";
import make from "./Images/make.jpg";
import logo from "./Images/logo.jpg";
import watches from "./Images/watches.jpg";
import iPhonese3rd from "./Images/iPhonese3rd.jpg";
function Apple() {
  return (
    <div>
        <nav>
                <input id="nav-toggle" type="checkbox" /> 
                {/* <img src={logo}></img> */}
                <i style={{color:"white"}} id="cart-icon" class="fa fa-apple"></i>
                <i style={{color:"white"}} id="cart-icon1"class="fa fa-search"></i>
                <i style={{color:"white"}} id="cart-icon2" class="fa fa-shopping-bag"></i>      
                  <ul class="links">
                {/* <AiFillApple className='applogo'/> */}
                <li><a href="#home">Store</a></li>
                <li><a href="#about">Mac</a></li>
                <li><a href="#work">iPad</a></li>
                <li><a href="#projects">iPhone</a></li>
                <li><a href="#projects">Watch</a></li>
                <li><a href="#projects">AirPods</a></li>
                <li><a href="#projects">Tv & Home</a></li>
                <li><a href="#projects">Only on Apple</a></li>
                <li><a href="#projects">Accessories</a></li>
                <li><a href="#projects" className='support'>Support</a></li>
                {/* <AiOutlineSearch className='search'/>
                <BsFillBagFill className='cart' /> */}
            </ul>
            <label for="nav-toggle" class="icon-burger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </label>
        </nav>
        <div className='header'>
            <h4>Get No Cost EMI for 3 or 6 months with qualifying Credit Cards from most leading banks.‡ Learn more <MdKeyboardArrowRight style={{marginBottom:"-4px",fontSize:"bold"}}/></h4>
        </div>
        <div className='banner'>
            <h1>iPhone 13 Pro</h1>
            <h4>Oh.So.Pro</h4>
            <h5>Learn More <MdKeyboardArrowRight style={{marginBottom:"-4px",fontSize:"bold"}}/>  Buy <MdKeyboardArrowRight style={{marginBottom:"-4px",fontSize:"bold"}} /></h5>
            <img src={one}></img>
        </div>
        <div className='banner1'>
            <h3>The New</h3>
            <h1>iPhone SE</h1>
            <h4>Love the Power. Love the price</h4>
            <h5>Learn More <MdKeyboardArrowRight style={{marginBottom:"-4px",fontSize:"bold"}}/>  Buy <MdKeyboardArrowRight style={{marginBottom:"-4px",fontSize:"bold"}} /></h5>
            <img src={iPhonese3rd}></img>
        </div>
        <div className='banner2'>
            <h1><AiFillApple/> Watch</h1>
            <h3>SERIES 7</h3>
            <h4>It's our largest display yet.</h4>
            <h5>Learn More <MdKeyboardArrowRight style={{marginBottom:"-4px",fontSize:"bold"}}/>  Buy <MdKeyboardArrowRight style={{marginBottom:"-4px",fontSize:"bold"}} /></h5>
            <img src={watches}></img>
        </div>
        <div className='rowposter'>
                <div className='left'>
                <img src={logo}></img>
                <h1><AiFillApple style={{color:"white"}}/> WWDC22</h1>
                <h3>The Worldwide Developers Conference is</h3>
                <h3>coming.Join us online from 6 to 10 June.</h3>
                <h5>Learn More <FiArrowUpRight style={{color:"rgb(74, 74, 245)",marginBottom:"-4px",fontSize:"bold"}}/></h5>
                </div>
            <div className='right'>
                <h1>Privacy. That's iPhone</h1>
                <h5>Learn More<MdKeyboardArrowRight style={{marginBottom:"-4px",fontSize:"bold"}}/></h5>
            </div>
        </div>
        <div className='rowposter1'>
                <div className='left1'>
                <h1>iPad air</h1>
                <h3>Light.Bright.Full of might.</h3>
                <h5>Learn More <MdKeyboardArrowRight style={{marginBottom:"-4px",fontSize:"bold"}}/>  Buy <MdKeyboardArrowRight style={{marginBottom:"-4px",fontSize:"bold"}} /></h5>
                <img src={airs}></img>
                </div>
                <div className='right1'>
                <h1>Mac Studio</h1>
                <h3>Empower station.</h3>
                <h5>Learn More <MdKeyboardArrowRight style={{marginBottom:"-4px",fontSize:"bold"}}/>  Buy <MdKeyboardArrowRight style={{marginBottom:"-4px",fontSize:"bold"}} /></h5>
                <img src={studio}></img>
                </div>
        </div>
        <div className='rowposter2'>
                <div className='left2'>
                <h2>Now until May 31</h2>
                <h1>Enjoy great Savings</h1>
                <h1>and extra credit.1</h1>
                <h3>Benefit from incredible savings</h3>
                <h3>and more credit with Apple Trade In.</h3>
                <h5>Learn More <MdKeyboardArrowRight style={{marginBottom:"-4px",fontSize:"bold"}}/></h5>
                <img src={mobile}></img>
                </div>
                <div className='right2'>
                <h5>Stream now <AiFillPlayCircle style={{color:"white"}}/></h5>
                </div>
        </div>
        <div className='footer'>
            <div>
            <h6>‡No-Cost EMI available for purchases made using qualifying credit cards on 3 or 6 month tenures only. 
                Minimum order spend applies as per your credit card’s issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing.
                 Credit card eligibility is subject to terms and conditions between you and your credit card issuing bank. Offer may be revised or withdrawn at any time without any prior notice.
                 Terms & conditions apply.
                 <br/>
                 Representative example: Based off a 6 month tenure. ₹69900 total cost includes 15% p.a. and No Cost EMI savings of ₹2959, paid over 6 months as 6 monthly payments of ₹11650.
                <br/>
                1.Get extra trade-in credit when you trade in an eligible iPhone or smartphone and purchase a new Apple device until 31 May 2022. The extra trade-in credit may range up to ₹3000 for iPhone, and from ₹1000 to ₹4000 for eligible smartphones.
                Additional terms from Apple or Apple’s trade-in partners may apply.
                <br/>
                Apple TV+ is ₹99/month after free trial. One subscription per Family Sharing group. Offer is valid for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.
            </h6>
            <hr/>
            </div>
            <div className='points'>
                <div className='shop'>
                    <h4>Shop and Learn</h4>
                    <h5>Store</h5>
                    <h5>Mac</h5>
                    <h5>iPad</h5>
                    <h5>iPhone</h5>
                    <h5>Watch</h5>
                    <h5>Airpods</h5>
                    <h5>TV & Home</h5>
                    <h5>iPod touch</h5>
                    <h5>AirTag</h5>
                    <h5>Accessories</h5>
                </div>
                <div className='services'>
                    <h4>Services</h4>
                    <h5>Apple Musice</h5>
                    <h5>Apple TV+</h5>
                    <h5>Apple Arcade</h5>
                    <h5>iCloud</h5>
                    <h5>Apple One</h5>
                    <h5>Apple Books</h5>
                    <h5>Apple Podcasts</h5>
                    <h5>App Store</h5>
                    <h4 className='account'>Account</h4>
                    <h5>Manage Your Apple ID</h5>
                    <h5>Apple Store Account</h5>
                    <h5>iCloud.com</h5>
                </div>
                <div className='store'>
                    <h4>Apple Store</h4>
                    <h5>Ways to Buy</h5>
                    <h5>Apple Trade In</h5>
                    <h5>Recycling Programme</h5>
                    <h5>Order Status</h5>
                    <h5>Shopping Help</h5>
                </div>
                <div className='buisness'>
                    <h4>For Business</h4>
                    <h5>Apple and Business</h5>
                    <h4>For Education</h4>
                    <h5>Apple and Education</h5>
                    <h5>Shop for Education</h5>
                    <h5>Shop for University</h5>
                    <h4>For Healthcare</h4>
                    <h5>Apple in Healthcare</h5>
                    <h5>Health on Apple Watch</h5>
                </div>
                <div className='values'>
                    <h4>Apple Values</h4>
                    <h5>Accessibility</h5>
                    <h5>Environment</h5>
                    <h5>Privacy</h5>
                    <h5>Supplier Responsibility</h5>
                    <h4>About Apple</h4>
                    <h5>Newsroom</h5>
                    <h5>Apple Leadership</h5>
                    <h5>Career Opportunities</h5>
                    <h5></h5>
                    <h5></h5>
                    <h5></h5>
                    <h5></h5>
                    <h5></h5>
                </div>

            </div>
            <div className='contact'>
            <h4>More Ways to shop: Find a retailer near you.Or call 000800 040 1966.</h4>
            </div>
            <hr className='on'/>
            <div className='content'>
                <div>
                <h4>Copyright <AiOutlineCopyrightCircle/> 2022 Apple Inc.All rights reserved.</h4>
                <br/>
                <br/>
                </div>
                <div>
                <h5 className='p'>Privacy Policy</h5>
                <div className="vl"></div>
                <h5 className='t'>Terms of Use</h5>
                <div className="vl"></div>
                <h5 className='s'>Sales Policy</h5>
                <div className="vl"></div>
                <h5 className='l'>Legal</h5>
                <div className="vl"></div>
                <h5 className='si'>Site Map</h5>
                <h5 className='india'>India</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Apple