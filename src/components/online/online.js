import './online.css';
import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";

function Online() {
    const [showPopup, setShowPopup] = useState(false);
    const handleClick = () => {
        console.log('Button clicked!');
        // You can perform any actions you want here
        setShowPopup(true);
        return (
            <div className='popup'>
                It is Working
            </div>
        );
      };
    return(
        <div className='online-container'>
            <div className='onln'>
                <div className='block'></div>
                <button className='onln-btn' onClick={handleClick}>
                    You are now online!
                </button>
                {showPopup && (
                    <div className='popup'>
                        It is Working
                    </div>
                )}
                {showPopup && (
                    <div className='popup2'>
                        It is Working
                    </div>
                )}
                {showPopup && (
                    <div className='popup3'>
                        It is Working
                    </div>
                )}
            </div>
            <div className='scroll'><p>scroll down</p></div>
        </div>
    );
}

export default Online;