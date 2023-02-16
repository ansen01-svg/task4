import { useEffect, useState } from 'react';


let API_ENDPOINT = 'https://official-joke-api.appspot.com/random_joke';

export default function useFetchJoke() {

    let [randomJoke, setRandomJoke] = useState(null);

    let fetchJoke = async(url) => {
        try {
            let response = await fetch(url);
            let data = await response.json();

            if (data) {
                let { setup, punchline } = data;
                let joke = { Question: setup, Answer: punchline }
                setRandomJoke(joke);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchJoke(API_ENDPOINT);
    }, [])

    return randomJoke;
}