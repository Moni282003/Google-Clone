import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
const [Imagesearch,setImageSearch]=useState(false);



    return (
        <Context.Provider value={{
            Imagesearch,setImageSearch
        }}>
              {props.children}
        </Context.Provider>
    );
};
