import React,{useState} from 'react'

let time = new Date().toLocaleTimeString();

const Clock = () =>{

    const [timer, setTimer] = useState(time)

    const UpdateTime = () =>{
        let time = new Date().toLocaleTimeString();
        setTimer(time)
    }
     setTimeout(UpdateTime, 1000)
    return (
        <div>
            <h1>{timer}</h1>
        </div>
    )
}
export default Clock