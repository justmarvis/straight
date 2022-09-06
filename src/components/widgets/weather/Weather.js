import './Weather.css';

function Weather() {
    return ( 
        <div className='weather-container'>
            <div className='weather-title'>
                <h2 className='weather-h2'>City</h2>
                <i className="fa-solid fa-location-arrow location"></i>
            </div>
            <div className='weather-data'>
                <h1 className='weather-h1'>26&deg;</h1>
                <div className='weather-scrum'>
                    <span className='weather-p'>Partly Cloudy</span>
                        <div className='weather-HL'>
                            <span className='weather-p'>H:26&deg;</span>
                            <span className='weather-p'>L:26&deg;</span>
                        </div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default Weather;