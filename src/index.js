import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, gql, InMemoryCache } from '@apollo/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. To learn more: https://bit.ly/CRA-vitals
reportWebVitals()
