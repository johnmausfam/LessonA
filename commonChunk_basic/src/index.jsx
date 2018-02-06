import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import "./css/Index.css"

var render = () => {
    ReactDOM.render(
        <div>
            <App />
        </div>,
        document.getElementById("root")
    );
}

render()

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render()
    })
}