import Dictionary from './dictionary/Dictionary';
import Listener from './listener/Listener';
import MusicPlay from './musicPlay/MusicPlay';
import Notebook from './notebook/Notebook';
import Record from './recordings/Record';
import Stock from './stock/Stock';
import Trending from './trending/Trending';
import Weather from './weather/Weather';
import './Widget.css';

function Widget() {
    return(
        <div className='widget-container' id='widget'>
            <Trending />
            <Notebook />
            <MusicPlay />
            <Weather />
            <Stock />
            <Dictionary />
            <Record />
            <Listener />
        </div>
    );
}

export default Widget;