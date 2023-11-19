import './Body.css';

import Google from './google-search/Google';
import Radio from './radio/Radio';
import Time from './time/Time';
import Header from '../header/Header';
import VoiceRecorder from './mic/voiceRecorder';
import Online from '../online/online';
import NewTrend from "./newtrend/newtrend";
// import HeartBeat from './heart-beat/heartBeat';

function Body() {
    return(
        <div className='body-container'>
            <div className='Header'>
                <Header />
            </div>
            {/* <div className='Google'>
                <Google />
            </div> */}
            <div className='Time'>
                <Time />
            </div>
            <div className='Mic'>
                <VoiceRecorder />
            </div>
            <div className='Onln'>
                <Online />
            </div>
            {/* <div className='HB'>
                <HeartBeat />
            </div> */}
        </div>
    );
}

export default Body;