import React, { useState, useEffect } from 'react';

function MyTeenHome() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData.success);
            } catch (error) {
                setError(error.message);
            }
        }
        fetchData();
    }, []);

    if (error) {
        return (
            <div>
                <p>Something Went Wrong!</p>
            </div>
        );
    }

    return (
        <div>
            <p>{data}</p>
        </div>
    );
}

export default MyTeenHome;
