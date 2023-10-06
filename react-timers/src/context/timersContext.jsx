import { createContext, useContext, useState, useMemo, useEffect } from "react";

const TimersContext = createContext({
    timersList: [],
    setTimersList: () => {},
    globalTimer: 0,
    setGlobalTimer: () => {},
    highestTimer: 0,
    setHighestTimer: () => {},
})

export const ContextProvider = ({ children }) => {
    const [timersList, setTimersList] = useState([]);
    const [globalTimer, setGlobalTimer] = useState(0);
    const [highestTimer, setHighestTimer] = useState(0);

    useEffect(()=> {
        const storedTimers = localStorage.getItem("timersList");
        let currHighest = 0;
        if(storedTimers) {
            const parsedTimers = storedTimers.split(",");
            setTimersList(parsedTimers);
            parsedTimers.forEach((timer)=>{
                if(parseInt(timer) > parseInt(currHighest)) {
                    currHighest = timer;
                    setHighestTimer(currHighest);
                }
            })
        }
    }, [])

    useEffect(()=> {
        localStorage.setItem("timersList", timersList);
    }, [timersList])

    const contextValue = useMemo(()=>({
        timersList,
        setTimersList,
        globalTimer,
        setGlobalTimer,
        highestTimer,
        setHighestTimer
    }), [timersList, globalTimer, highestTimer]);
    return <TimersContext.Provider value={ contextValue }>{ children }</TimersContext.Provider>
}

export const useTimersContext = () => useContext(TimersContext);

export default TimersContext;