import React from 'react'
import ReactDOM from 'react-dom'
import BasicExample from './BasicExample'


var render = () => {
    ReactDOM.render(
        <div>
            <BasicExample />
        </div>,
        document.getElementById("root")
    );
}

render()

if (module.hot) {
    module.hot.accept('./BasicExample', () => {
        render()
    })
}