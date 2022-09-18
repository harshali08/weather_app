import React from 'react';
// import ReactDom from 'react-dom';
import App from "./App"
import { createRoot } from 'react-dom/client'
createRoot(document.getElementById('root')).render(<h1><App></App></h1>)

// ReactDom.render(<App/>,document.getElementById('root'));