import logo from './logo.svg';
import './App.css';
// App.js
import React, { useEffect, useState } from 'react';
import { fetchHtmlContent } from './htmlContentReader';



function App() {
    const [htmlContent, setHtmlContent] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const content = await fetchHtmlContent();
            setHtmlContent(content);
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            <h1>HTML Content:</h1>
            {htmlContent ? (
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
