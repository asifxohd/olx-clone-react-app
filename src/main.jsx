import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  { FirebaseContext } from './store/FirebaseContext.jsx'
import firebase from './Firebase/config'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirebaseContext.Provider value={{firebase}} >
                <App/>            
        </FirebaseContext.Provider>
    </React.StrictMode>
)
