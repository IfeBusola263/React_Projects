import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config){
    const response = await fetch(url, config);
    const resData = await response.json();

    if (!response.ok){
        throw new Error(resData.message || 'Something went rong with the request');
    }

    return resData;
}

export default function useHttps(url, intitialData, config){
    const [data, setData] = useState(intitialData);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    function clearData(){
        setData(intitialData);
    }

    // Helper function to set the values to be extracted from request made
    const sendRequest = useCallback(async function sendRequest(configData){

        setIsLoading(true)
        try {
            const data = await sendHttpRequest(url, { ...config, body: configData });
            setData(data);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }, [url, config]);

    // Handles the request so it doesn't end up in an endless loop
    // since if the states change, the component would be re-rendered. 
    useEffect(() => {

        if ((config && (config.method === 'GET' || !config.method)) || !config ){
            sendRequest();
        }
    }, [sendRequest, config])

    return {
        data,
        error,
        isLoading,
        sendRequest,
        clearData
    }
}