import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint,query) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': 'c622efb711mshcba8b748ce78ae9p16c0a0jsn9f5adfa90d7a',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query}
    };

    const fetchData = async () =>{
        setIsLoading(true);
        try {
            const response = await axios.request(options);

            setData(response.data.data)
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('there is an error');
        } finally{
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const refetch = ()=>{
        setIsLoading(true);
        fetchData();
    }

    return {data,isLoading,error,refetch};
}

export default useFetch;