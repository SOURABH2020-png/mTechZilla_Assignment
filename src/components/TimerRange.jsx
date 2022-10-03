import { useRef } from "react";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function TimerRange() {

    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);
    const [countTime, setPauseTime] = useState();


    const resetTime = () => {
        clearInterval(setMinutes("25"));
        clearInterval(setPauseTime("25"));
    }

    const timePause = () => {
        setPauseTime(minutes);
    }

    const startT = () => {
        // const countTime = setInterval(() => {
        //     setMinutes((minutes) => minutes - 1);
        //     if (minutes === 0) {
        //         clearInterval(minutes);
        //     }
        // }, 1000)
        // setPauseTime(countTime);

        let interval = setInterval(() => {
            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59)
                    setMinutes(minutes - 1)
                    console.log(minutes, "minutesone")
                } else {
                    let minutes = displayMessage ? 24 : 4
                    let seconds = 59

                    setSeconds(seconds)
                    setMinutes(minutes)
                    setDisplayMessage(!displayMessage)
                    console.log(minutes, "minutes")
                    console.log(seconds, "seconds")

                }
            } else {
                setSeconds(seconds - 1)
            }
            console.log(minutes, "minutesone")
            console.log(seconds, "seconds")
            clearInterval(interval)
        })

    };

    useEffect(() => {
        if (minutes === 0) {
            clearInterval(minutes);
        }
        if (minutes <= 0) {
            setMinutes(0);
        }
        if (seconds) {
            startT();
            console.log(seconds, "sec")
        } else {
            clearInterval(seconds);
            clearInterval(minutes);
        }
    }, [countTime, seconds]);

    useEffect(() => {
        return () => clearInterval(countTime, seconds);
    }, [countTime, seconds]);


    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds


    return (
        <div className="mt-4 d-flex flex-column align-items-center justify-content-center">
            {displayMessage && <h2 className="mx-auto py-3 px-4 ">Break time.....!</h2>}
            <div className="btn rounded-circle primary-bg text-white box-shadow mb-4">
                <h2 className="mx-auto py-3 px-4 ">{timerMinutes}:{timerSeconds}</h2>
            </div>
            <div className="gap-3 d-flex">
                <Button onClick={() => resetTime()}>Reset</Button>
                <Button onClick={() => timePause()} >Pause</Button>
                <Button onClick={startT}>Start</Button>
            </div>
        </div>
    )
}