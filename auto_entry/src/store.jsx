import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'


var render = () => {
    ReactDOM.render(
        <div>
            <App appTitle="This is store list!" />
        </div>,
        document.getElementById("root")
    );
}

render()