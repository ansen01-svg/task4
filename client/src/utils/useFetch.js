import { useEffect, useState } from 'react';


let API_ENDPOINT = 'http://localhost:5001/apis/v1/jokes/allJokes'

export default function useFetch() {

    let [isLoading, setIsLoading] = useState(false);
    let [isError, setError] = useState({ error: false, msg : '' });
    let [jokes, setJokes] = useState([]);

    let fetchJokes = async(url) => {      
        setIsLoading(true)

        try {
            let response = await fetch(url)
            let data = await response.json()

            if (data) {
                setJokes(data.data)
            } else {
                setError({ error: true, msg: data.Error })
            }

            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchJokes(API_ENDPOINT)
    }, [])

    return { isLoading, isError, jokes };
}