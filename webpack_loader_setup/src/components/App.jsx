import React from 'react'
import reactLogo from '../images/react.png'
import '../css/App.css'
import '../css/App.scss'
const App = ()=>(
    <div>
        <h1>Test load image!!!</h1>
        <hr />
        <img src="../images/react.png" />
        <img src="/assets/redux.png" />
        <img src={reactLogo} />
        <div className="reactlogo"></div>
        <div className="reactlogo2"></div>
        <hr />
        <div className="a">
            <div className="text">123</div>
        </div>
        <div className="b">
            <div className="text">456</div>
        </div>
    </div>
)

export default App;