import './Body.css';
import Date from './date/Date';

import Google from './google-search/Google';
import Mic from './mic/Mic';
import Radio from './radio/Radio';
import Time from './time/Time';
import Header from '../header/Header';

function Body() {
    return(
        <div className='body-container'>
            <div className='header'>
                <Header />
            </div>
            <div className='google'>
                <Google />
            </div>
            <br />
            <Time />
            <br />
            <Date />
            <br />
            <Mic />
            <div className='rad-right'>
                <Radio />
            </div>
        </div>
    );
}

export default Body;