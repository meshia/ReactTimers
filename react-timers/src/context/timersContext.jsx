import { createContext, useContext, useState, useEffect, useMemo } from "react";

const TimersContext = createContext({
    timersList: [],
    setTimersList: () => {},
    globalTimer: 0,
    setGlobalTimer: () => {}
})

export const ContextProvider = ({ children }) => {
    const [timersList, setTimersList] = useState([]);
    const [globalTimer, setGlobalTimer] = useState(0);

    const contextValue = useMemo(()=>({
        timersList,
        setTimersList,
        globalTimer,
        setGlobalTimer,
    }), [timersList, globalTimer]);
    return <TimersContext.Provider value={ contextValue }>{ children }</TimersContext.Provider>
}

export const useTimersContext = () => useContext(TimersContext);

export default TimersContext;