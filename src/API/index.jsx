import { Children, createContext, useEffect, useState } from "react";

const Api = createContext(null);


const ApiProvider =  ({children}) =>
{
    const [data,setData]=useState();

    useEffect(() => {
       fetch('https://the-trivia-api.com/api/questions?categories=science&limit=8&tags=philosophy,birds').then((res) => res.json()).then((data)=> setData(data))
    }, [0])
    

    
   
    return(
        <Api.Provider value={{data}}>
            {children}
        </Api.Provider>
    )
}

export {Api, ApiProvider};