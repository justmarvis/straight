import Body from '../body/Body';
import Display from '../display';
import Header from '../header/Header';
import { NavLink, Link } from "react-router-dom";
import './Profile.css';

function Profile() {
    return (
        <div className='profile-container'>
            <Header />
            <div className='profile'>
                <Link to='/'><i class="fa-solid fa-xmark prof-bk"></i></Link>
                <h4>Straight</h4>
                <br />
                <div className="proImg">
                    <img src="https://cdn.glitch.global/6a19564e-7f95-4bcb-afee-8473720639e4/dark-g1da49e1de_1920.jpg?v=1660726404449" alt="" className="pro-img" />
                </div>
                <br />
                <form className='profile-form'>
                    <div className='one'>
                        <div className='form-input'>
                            <label className='text'>Username:</label>
                            <div className='form-text'>Marvis Igbineweka</div>
                        </div>
                        <div className='form-input'>
                            <label className='text'>Password:</label>
                            <div className='form-text'>*****</div>
                        </div>
                    </div>
                    <div className='one'>
                        <div className='form-input'>
                            <label className='text'>Email:</label>
                            <div className='form-text'>marvisdev98@gmail.com</div>
                        </div>
                        <div className='form-input'>
                            <label className='text'>Phone:</label>
                            <div className='form-text'>+1 (801) 809 - 6530</div>
                        </div>
                    </div>
                </form>
                <div className='bio'>
                    <label className='text'>Biography</label>
                    <div className='bio-text'>Just a guy trying to make it in life!</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;