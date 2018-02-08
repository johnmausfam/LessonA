import React from 'react'
import Com1,{local as colorWord1} from './Component1'
import Com2,{local as colorWord2} from './Component2'
console.log(Com1)
const cn = "colorWord";
const App = ()=>(
    <div>
        <Com1 className="colorWord" text="com1" />
        <Com2 className="colorWord" text="com2" />
        <hr />
        <Com1 className={colorWord1} text="com1" />
        <Com2 className={colorWord2} text="com2" />
    </div>
)

export default App;