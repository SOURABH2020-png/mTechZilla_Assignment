import { useRef } from "react";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function TimerRange() {

    const [startTime, setStartTime] = useState(5);
    const  [pauseTime, setPauseTime] = useState(0);
    const RefPause = useRef();
    let interval
    const resetTime = () => {
        setStartTime(0);
    }

    const timePause = () => {
        console.log("Paused clicked"+startTime);
        setPauseTime(startTime);
        clearInterval(interval);

    }

    const startT = () => {
        
       interval=  setInterval(() => {
                setStartTime((startTime) => startTime-1);
            }, 1000);
      
    }


    return (
        <div className="mt-4 d-flex flex-column align-items-center justify-content-center">
            <div className="btn rounded-circle primary-bg text-white box-shadow mb-4">
                <h2 className="mx-auto py-3 px-4 ">{pauseTime?pauseTime: startTime }</h2>
            </div>
            <div className="gap-3 d-flex">
                <Button onClick={() => resetTime()}>Reset</Button>
                <Button onClick={() => timePause()} ref={RefPause}>Pause</Button>
                <Button onClick={() => startT()}>Start</Button>
            </div>
        </div>
    )
}