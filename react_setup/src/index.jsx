import React from 'react'
import ReactDOM from 'react-dom'
import App from './component/App'


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