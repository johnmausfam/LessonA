import React from 'react'
import ReactDOM from 'react-dom'
import ProxyTestApp from './ProxyTestApp'

var render = () => {
    ReactDOM.render(
        <div>
            <ProxyTestApp />
        </div>,
        document.getElementById("root")
    );
}

render()

if (module.hot) {
    module.hot.accept('./ProxyTestApp', () => {
        render()
    })
}