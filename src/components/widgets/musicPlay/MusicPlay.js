import './MusicPlay.css';

function MusicPlay() {
    return ( 
        <div className='musicplay-container'>
            {/* <h2 className='musicplay-h2'>Music Play</h2> */}
            <i className="fa-solid fa-caret-down music-drop"></i>
            <div className='musicplay'>
            <i className="fa-solid fa-angle-left previous"></i>
            <div className='controls'>
                <div className='play-btn'>
                    {/* <span><i className="fa-solid fa-play play"></i></span> */}
                    <span></span>
                    <span></span>
                </div>
            </div>
                <i className="fa-solid fa-angle-right next"></i>
            </div>
            <span className='artist'>Artist</span>
            <div className='slider'>
                <input type='range' value='10' className='bar' />
                <span className='song-time'>00:00</span>
                <span className='song-duration'>00:00</span>
            </div>
        </div>
    );
}

export default MusicPlay;