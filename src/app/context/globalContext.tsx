
import { createContext, useContext, useState } from "react";

import PizzaOrdersData, { PizzaOrderType } from "@/lib/Data"


interface globalContextType{
    order: PizzaOrderType[];
    setOrder: (orders: any) => void;
    filter: string;
    setFilter: (filter: any) => void;
    sort: string;
    setSort: (sort: any) => void;
}
export const globalContext = createContext<globalContextType>({
    order: PizzaOrdersData,
    setOrder: (orders: any) => {},
    filter: "",
    setFilter: (filter: any) => {},
    sort: "",
    setSort: (sort: any) => {},
})
export const useGlobalContext =()=> useContext(globalContext);
export const GlobalContextProvider = ({children}:{children: React.ReactNode})=>{
    const [order, setOrder] = useState(PizzaOrdersData);
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("");

    return (
        <globalContext.Provider value={{ order, setOrder, filter, setFilter , sort, setSort }}>
            {children}
        </globalContext.Provider>
    );
};