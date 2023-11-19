import './Time.css';
import React, { useEffect, useState } from "react";

function Time() {


    const date = new Date();
    const dateAsString = date.toString();
    const timezone = dateAsString.match(/\(([^\)]+)\)$/)[1];

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000);
    }, []);

    return (
        <div className="time-container">
            {/* <CalenderIcon /> */}
            {/* <ClockIcon /> */}
            <div className='time-border'>
                <p className='clock'>
                    <span className='hour'>
                        {dateState.toLocaleString('en-US', {
                            hour: 'numeric',
                            hour12: false,
                        })}
                    </span>
                    <span className='colon'>:</span>
                    <span className='minute'>
                        {dateState.toLocaleString('en-US', {
                            minute: 'numeric'
                        })}
                    </span>
                    <span className='second'>
                        {dateState.toLocaleString('en-US', {
                            second: 'numeric'
                        })}
                    </span>
                </p>
            </div>
            <p className='date'>
                {dateState.toLocaleDateString('en-US', { weekday: 'long', })}{' '}
                {dateState.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })} | {' '}
                {timezone}
            </p>
            <br /><br />
            <div className='divider'></div>

        </div>
    );
}

export default Time;