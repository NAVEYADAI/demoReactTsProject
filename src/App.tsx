import React from 'react'
import './App.css'
import AllView from './components/AllView'
import { Provider } from 'react-redux'
import { store } from './store/store' // עדכן את הנתיב לחנות שלך
import { MyProvider } from './GlobalVaribale'

function App() {
    return (
        <MyProvider>
            <Provider store={store}>
                <AllView />
            </Provider>
        </MyProvider>
    )
}

export default App
