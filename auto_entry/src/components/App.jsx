import React from 'react'
import Title from './Title'
import Nav from './Nav'
import '../css/App.scss'
const App = ({appTitle})=>(
    <div>
        <Title title={appTitle}/>
        <hr />
        <Nav />
    </div>
)

export default App;