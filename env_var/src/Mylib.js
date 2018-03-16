import React from 'react'
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getCurrentTimeFormat = ()=>{
    var d = new Date();
    var day = days[d.getDay()];
    var hr = d.getHours();
    var min = d.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }
    var ampm = "am";
    if( hr > 12 ) {
        hr -= 12;
        ampm = "pm";
    }
    var date = d.getDate();
    var month = months[d.getMonth()];
    var year = d.getFullYear();
    return (day + " " + hr + ":" + min + ampm + " " + date + " " + month + " " + year);
}

const alertMsg = (msg)=>{
    alert(msg);
}

const TextLabel = ({text})=>(<label>{text}</label>)
class TextLabel2 extends React.Component{
    render(){
        return <label>{this.props.text}</label> 
    }
}

export default {getCurrentTimeFormat,alertMsg,months,days,TextLabel,TextLabel2}