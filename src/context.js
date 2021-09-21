import React, { useState, createContext } from 'react'

export const AppContext = createContext();

export const AppProvider = props => {
    const [modal, setModal] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    const openSidebar = () => {
        setSidebar(true);
    }

    const closeSidebar = () => {
        setSidebar(false);
    }


    return(
        <AppContext.Provider value={{modal, sidebar, openModal, closeModal, openSidebar, closeSidebar}}>{props.children}</AppContext.Provider>
    )
};


