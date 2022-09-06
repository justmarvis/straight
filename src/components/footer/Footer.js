import './Footer.css';

import { HashLink as Link } from "react-router-hash-link";

function Footer() {
    return(
        <div className='footer-container'>
        {/* footer component  */}
            <p className="copy-right">&copy; created by Dev-VER • 2022</p>
            <Link to='#widget' smooth>
                <i className="fa-solid fa-arrow-down"></i>
            </Link>
        </div>
    );
}

export default Footer;