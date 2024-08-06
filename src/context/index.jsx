import * as React from 'react'
import { AppContextProvider } from './appContext'
import { BrowserRouter as Router } from 'react-router-dom'
import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()



const AppProviders = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <AppContextProvider>{children}</AppContextProvider>
            </Router>
        </QueryClientProvider>
    )
}

export { AppProviders }
