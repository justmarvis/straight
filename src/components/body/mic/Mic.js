import './Mic.css';

function Mic() {
    return(
        <div className="mic-container">
            <input type="checkbox" className="checkbox" id='chk' />
            <label for="chk" className="mic">
                <i className="fa-solid fa-microphone microphone"></i>
            </label>
        </div>
    );
}

export default Mic;