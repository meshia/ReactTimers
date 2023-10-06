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
    const [ countdown, setCountdown ] = useState("00:00");
    const { highestTimer, globalTimer } = useTimersContext({});

    useEffect(()=> {
        console.log("globalTimer", globalTimer, "value", value);
        if(highestTimer - globalTimer <= value) {
            setCountdown(globalTimer)
        }
        
    },[ globalTimer ])
    return (
        <StyledTimer>
            <h4>{ value }</h4>
            <h2>{ countdown }</h2>
        </StyledTimer>
    )
}

export default Timer;