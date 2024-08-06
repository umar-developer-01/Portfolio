import * as React from 'react'


const AppContext = React.createContext()
AppContext.displayName = 'AppContext'

function AppContextProvider(props) {
    const [data, setData] = React.useState();
    const value = { data, setData }
    return (
        <>
            <AppContext.Provider value={value} {...props} />
        </>
    )
}

function useAuth() {
    const context = React.useContext(AppContext)
    if (context === undefined) {
        throw new Error(`useAuth must be used within a AppContext`)
    }
    return context
}



export { AppContextProvider, useAuth }
