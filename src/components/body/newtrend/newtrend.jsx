import './newtrend.css'
import {useEffect, useState} from "react";


const NewTrend = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Define your API key
        const apiKey = '487724c065854c1f92d09433142c0a67';

        // Fetch data from the API with the API key as a query parameter
        fetch(`https://newsapi.org/v2/everything?q=Apple&from=2023-10-20&sortBy=popularity&api_Key=api_key`)
            .then((response) => response.json())
            .then((data) => {
                setNewsData(data); // Update state with fetched data
                setLoading(false); // Set loading to false
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div className='trendContainer'>
            {/*<h1>Latest News</h1>*/}
            {/*{loading ? (*/}
            {/*    <p>Loading...</p>*/}
            {/*) : (*/}
            {/*    <ul>*/}
            {/*        {newsData.map((item) => (*/}
            {/*            <li key={item.id}>{item.title}</li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*)}*/}
        </div>
    )
}

export default NewTrend;