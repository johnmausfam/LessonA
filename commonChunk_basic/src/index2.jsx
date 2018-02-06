import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Index2Use from './components/Index2Use'


var render = () => {
    ReactDOM.render(
        <div>
            <Index2Use />
            <App />
        </div>,
        document.getElementById("root2")
    );
}

render()

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render()
    })
}