import { createContext } from "react";

export let dataContext = createContext()

function Usercontext(children){
    return (
        <div>
            <dataContext.Provider value={value}>
                {children} 

            </dataContext.Provider>

        </div>
    )
}

export default Usercontext;