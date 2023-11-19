import './heartBeat.css';
import React from 'react';

function HeartBeat() {
    return (
        <div className='HB-container'>
            <svg class="graph-svg" viewBox="0 0 300 150">
  {/* <!-- Axis lines --> */}
  <line x1="20" y1="10" x2="20" y2="140" stroke="black" />
  <line x1="20" y1="140" x2="280" y2="140" stroke="black" />

  {/* <!-- Heartbeat line --> */}
  <path
    d="M20 120 Q75 60, 140 120 Q205 180, 280 120"
    fill="none"
    stroke="red"
    stroke-width="2"
  />
  
  {/* <!-- Points --> */}
  <circle cx="20" cy="120" r="2" fill="red" />
  <circle cx="140" cy="120" r="2" fill="red" />
  <circle cx="280" cy="120" r="2" fill="red" />
</svg>
        </div>
    )
}
export default HeartBeat();