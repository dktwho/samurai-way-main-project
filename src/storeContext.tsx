import React from "react";
import {MessagePageType, ProfilePageType, StoreType} from "./redux/store";


export type ProviderType = {
    store: StoreType
    children: React.ReactNode
}

export const StoreContext = React.createContext({} as StoreType)

export const Provider = (props: any) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}