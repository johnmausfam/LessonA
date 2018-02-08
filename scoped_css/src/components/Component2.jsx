import React from 'react'
import styles from '../css/Component2.css'

const com = ({className,text})=>{
    return <div className={className}>{text}</div>
}
export const local = styles.colorWord;
export default com