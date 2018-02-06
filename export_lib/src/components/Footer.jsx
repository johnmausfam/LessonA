import React from 'react'
import Head from './Head'
import MyLib from '../../dist_lib/Mylib.js'

const head = ()=>(
    <div className="footer">
        <MyLib.TextLabel2 text={MyLib.getCurrentTimeFormat()} />
    </div>
)

export default head;