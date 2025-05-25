"use client"

import { GlobalContextProvider } from "./globalContext";



interface Props{
    children: React.ReactNode
}

function ContextProvider({children} :Props){
    return <GlobalContextProvider>{children}</GlobalContextProvider>
}
 export default ContextProvider;