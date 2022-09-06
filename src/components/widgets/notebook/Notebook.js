import './Notebook.css';

function Notebook() {
    return ( 
        <div className='notebook-container'>
            <i className="fa-solid fa-list-check note-logo"></i>
            <div className='pad-scroll'>
                <div className='notebook-pad'>
                    <div className='note-stroke'>
                        <h3 className='notebook-h2'>NOTE</h3>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
            </div>
            <div className='add-note'>
                <i className="fa-solid fa-plus"></i>
            </div>
        </div>
    );
}

export default Notebook;