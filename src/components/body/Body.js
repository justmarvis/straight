import './Body.css';

import Google from './google-search/Google';
import Mic from './mic/Mic';
import Radio from './radio/Radio';
import Time from './time/Time';
import Header from '../header/Header';

function Body() {
    return(
        <div className='body-container'>
            <div className='Header'>
                <Header />
            </div>
            <div className='Google'>
                <Google />
            </div>
            <div className='Time'>
                <Time />
            </div>
            <div className='Mic'>
                <Mic />
            </div>
        </div>
    );
}

export default Body;