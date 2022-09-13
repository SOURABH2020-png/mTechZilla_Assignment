import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-lfmzmzfi.us.auth0.com"
    clientId="RS2azym794SDLAuT7fXyzeWVlmuncppp"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
)
