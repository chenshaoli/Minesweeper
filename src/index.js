import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App'
import { ErrorBoundary } from './errorBoundary'

ReactDOM.render(
<ErrorBoundary>
    <App/>
</ErrorBoundary>,
document.querySelector('#root'))