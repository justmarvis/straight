import './Header.css';

function Header() {
    return(
        <div className='header-container'>
                <div className="Img">
                    <img src="https://cdn.glitch.global/6a19564e-7f95-4bcb-afee-8473720639e4/dark-g1da49e1de_1920.jpg?v=1660726404449" alt="" className="img" />
                </div>
                <div className='top-right'>
                    <i class="fa-solid fa-user-group top"></i>
                    <i className="fa-solid fa-message top"></i>
                    <input type="checkbox" className='setting' id="settings" />
                        <label for="settings" className='set'>
                        <i className="fa fa-cog stn" aria-hidden="true"></i>
                        </label>
                </div>
        </div>
    );
}

export default Header;