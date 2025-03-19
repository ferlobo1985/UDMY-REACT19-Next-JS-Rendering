'use client'
import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0)

    console.log('Where?')
    return(
        <div>
            <hr/>
            <div>Count:{count}</div>
            <button
                onClick={()=>{
                    setCount(count+1)
                }}
            >
                Update
            </button>
        </div>
    )
}