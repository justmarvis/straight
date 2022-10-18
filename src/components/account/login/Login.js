import './Login.css';
import { NavLink, Link } from "react-router-dom";

function Login() {
    return(
        <div className='login-container'>
            <h2 className='Logo-title'><i class="fa-solid fa-s"></i><span className='h1'>traight</span></h2>
            <h6 className='Lnote'>Have an account?</h6>
            <h1 className='begin'>Log In</h1>
            <form method='' action='./components/'>
                <div className='two'>
                    <label className='loginE' for='email'>Email Address: </label>
                    <input className='email' type='text' />
                </div>
                <div className='two'>
                    <label className='loginP' for='password'>Password: </label>
                    <input className='password' type='text' />
                </div>
                <Link to='/homepage'><input type="submit" value="Log In" className='logbtn'></input></Link>
            </form>
        </div>
    );
}

export default Login;