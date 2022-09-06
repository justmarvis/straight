import './Radio.css';

function Radio() {
    return(
        <div className='radio-container'>
            <label className="CHECKBOX">
                <input type="checkbox" title="check" />
                <span className="checkmark"></span>
            </label>
        </div>
    );
}

export default Radio;