import { createContext, useContext, useState } from 'react';
import useFetch from '../utils/useFetch';


let AppContext = createContext();

let ContextProvider = ({ children }) => {

    let [currentJoke, setCurrentJoke] = useState(null);
    let [toDeleteJoke, setToDeleteJoke] = useState(null);

    let { isLoading, isError, jokes } = useFetch();

    return (
        <AppContext.Provider
        value={{ 
            isLoading, 
            isError, 
            jokes, 
            currentJoke, 
            setCurrentJoke ,
            toDeleteJoke,
            setToDeleteJoke
        }}
        >
            { children }
        </AppContext.Provider>
    )
}

export let useMyContext = () => {
    return useContext(AppContext);
}


export default ContextProvider;