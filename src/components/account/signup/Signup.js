import './Signup.css';
import { NavLink, Link } from "react-router-dom";

function Signup() {
    return(
        <div className='signup-container'>
            <h6 className='Snote'>You don't have an account?</h6>
            <h1 className='begin'>Sign Up</h1>
            <form method='' action='./components/'>
                <div className='one'>
                    <div className='signupfirstname'>
                        <label className='Fname' for='fname'>First Name: </label>
                        <input className='fname' type='text' placeholder='John' />
                    </div>
                    <div className='signuplastname'>
                        <label className='Lname' for='lname'>Last Name: </label>
                        <input className='lname' type='text' placeholder='Doe' />
                    </div>
                </div>
                <div className='two'>
                    <label className='Email' for='email'>Display Name: </label>
                    <input className='email' type='text' placeholder='ranger123' />
                </div>
                <div className='two'>
                    <label className='Email' for='email'>Email: </label>
                    <input className='email' type='text' placeholder='johndoe@gmail.com' />
                </div>
                <div className='two'>
                    <label className='Password' for='password'>Password: </label>
                    <input className='password' type='text' />
                </div>
                <Link to='/homepage'><input type="submit" value="Sign Up" className='signbtn'></input></Link>
            </form>
        </div>
    );
}

export default Signup;