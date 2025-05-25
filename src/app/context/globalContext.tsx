import Pizza from "@/components/Pizza";
import { create } from "domain";
import { createContext, useContext, useState } from "react";

import PizzaOrdersData, { PizzaOrderType } from "@/lib/Data"


interface globalContextType{
    order: PizzaOrderType[];
    setOrder: (orders: any) => void;
    filter: string;
    setFilter: (filter: any) => void;
}
export const globalContext = createContext<globalContextType>({
    order: [],
    setOrder: (orders: any) => {},
    filter: "",
    setFilter: (filter: any) => {},
})
export const useGlobalContext =()=> useContext(globalContext);
export const GlobalContextProvider = ({children}:{children: React.ReactNode})=>{
    const [order, setOrder] = useState([]);
    const [filter, setFilter] = useState("");

    return (
        <globalContext.Provider value={{ order, setOrder, filter, setFilter }}>
            {children}
        </globalContext.Provider>
    );
};