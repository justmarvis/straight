import './Dictionary.css';

function Dictionary() {
    return ( 
        <div className='dictionary-container'>
            <i className="fa-solid fa-spell-check dictionary"></i>
            <input type='text' className='dictionary-input' />
        </div>
    );
}

export default Dictionary;