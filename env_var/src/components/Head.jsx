import React from 'react'
import Head from './Head'
import {Title,APIUrl} from '../data/var'
const head = ()=>(
    <div className="head">{Title}{APIUrl}</div>
)

export default head;