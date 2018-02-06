import React from 'react'

const dataURL = "http://localhost:3010/"
const dataURL2 = "http://localhost:3000/api/"
class ProxyTestApp extends React.Component{
    doGetData(){
        fetch(dataURL)
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert(response.msg));
    }
    render(){
        return <button onClick={()=>this.doGetData()}>Get Data</button>
    }
}
export default ProxyTestApp