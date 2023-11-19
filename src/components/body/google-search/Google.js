import './Google.css';

function Google() {
    return(
        <div className='google-container'>
            <form action="https://www.google.com/search" target="_blank" method="get" className="google-search">
                <input type="text" name="q" className="input" placeholder="...redirected to google" />
                <button type="submit" className="search"><i className="fa fa-search" aria-hidden="true"></i></button>
                {/* <span className="powered">powered by google search</span> */}
                </form>
        </div>
    );
}

export default Google;