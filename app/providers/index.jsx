'use client';


import React, { createContext, useState } from "react";

const HeaderContext = createContext({})

export default function HeaderProvider({ children }) {

    const [headerState, setHeaderState] = useState(1);

    return (
        <HeaderContext.Provider value={{ headerState, setHeaderState }}>
            {children}
        </HeaderContext.Provider>
    )
}