import React, { useEffect, useState } from 'react';

const App = () => {
    const [htmlPage, setHtmlPage] = useState(null);

    useEffect(() => {
        fetchHtml();
    },[]);

    const fetchHtml = async () => {
        try {
            const response = await fetch('./flower.html');
            if (!response.ok) {
                throw new Error('Failed to fetch HTML');
            }
            const html = await response.text();
            console.log(html);
            setHtmlPage(html);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div dangerouslySetInnerHTML={{__html:htmlPage}}></div>
    )
};

export default App;