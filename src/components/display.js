import './display.css';

import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';
import Widget from './widgets/Widget';
import Second from './second/second';

const Display = () => {
    return(
        <div className='display-container'>
            <div className='Body'>
                <div className='body'>
                    <Body />
                </div>
                <div className='second'>
                    <Second />
                </div>
            </div>
        </div>
    );
}

export default Display;