import * as React from 'react'
import { AppContextProvider } from './appContext'
import { BrowserRouter as Router } from 'react-router-dom'




const AppProviders = ({ children }) => {
    return (

                <AppContextProvider>{children}</AppContextProvider>


    )
}

export { AppProviders }
