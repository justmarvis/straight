import './Header.css';
import { NavLink, Link } from "react-router-dom";

function Header() {
    return(
        <div className='header-container'>
                <div className='top-right'>
                    {/*<i className="fa-solid fa-user-group top"></i>*/}
                    <i class="fa-solid fa-message message"></i>
                    <i class="fa-solid fa-user-group userGroup"></i>
                    <i class="fa-solid fa-arrow-left pop-up"></i>
                </div>
        </div>
    );
}

export default Header;