import "./Footer.css"
import { Link } from "react-router";

function Footer() {
    return (
        <div id="footer">
            <div className="footertop"></div>
            <div className="box">
                <span id="contact1">Contact us</span>
                <span>+91000000000000</span>
                <span>abc12345@gmail.com</span>
                <span>Address,city/India</span>
            </div>
            <div className="box">
                <span id="services">Our Services</span>
                <span>Home</span>
                <span>Add Listing</span>
                <span>Rent</span>
            </div>
            <div className="box">
                <span id="Quick">Quick Link</span>
                <span>Knowledge</span>
                <span>FAQ</span>
                <span>Contact</span>
            </div>
            <div className="box">
                <span id="logo">Private Property Rental</span>
                <Link to={"/Contact"}><button>Contact Us</button></Link>
            </div>
            <div className="footerbuttom">
                <span>Privacy Policy || </span>
                <span>Use of terms</span>
            </div>
        </div>
    )
}
export default Footer;