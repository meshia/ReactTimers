import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { useTimersContext } from "../context/timersContext";

const StyledTimer = styled('div')({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '4em',
    color: 'var(--base-text)',
    backgroundColor: 'var(--timer-background)',
    width: '4em',
    height: '4em',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0.5em',
    h4: {
        position: 'absolute',
        top: '-0.5em',
        margin: '0',
    },
    h2: {
        margin: '0',
    }
})

const Timer = ({ value }) => {
    const [ minutes, setMinutes ] = useState("00");
    const [ seconds, setSeconds ] = useState("00");
    const [ displayValue, setDisplayValue ] = useState("");
    const { highestTimer, globalTimer } = useTimersContext({});

    useEffect(()=>{
        setDisplayValue(
            `${String(Math.floor(value / 60)).padStart(2, '0')}:${String(value % 60).padStart(2, '0')}`
        )
    },[])

    useEffect(()=> {
        // console.log("globalTimer", globalTimer, "value", value);
        if(highestTimer - globalTimer <= value) {
            setMinutes(String(Math.floor(globalTimer / 60)).padStart(2, '0'))
            setSeconds(String(globalTimer % 60).padStart(2, '0'))
        } else {
            setMinutes("00");
            setSeconds("00");
        }
        
    },[ globalTimer ])
    return (
        <StyledTimer>
            <h4>{ displayValue }</h4>
            <h2>{ `${minutes}:${seconds}` }</h2>
        </StyledTimer>
    )
}

export default Timer;