import './User.css';
import Login from '../login/Login';
import { NavLink, Link } from "react-router-dom";
import Signup from '../signup/Signup';

const User = () => {
    return(
        <div className='user-container'>
            <div className='login'>
                <Login />
            </div>
            <div className='signup'>
                <Signup />
            </div>
        </div>
    );
}

export default User;