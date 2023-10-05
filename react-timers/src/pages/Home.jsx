import { useEffect, useState } from "react";
import { useTimersContext } from "../context/timersContext";
import PrimaryButton from '../components/PrimaryButton';
import AddButton from '../components/AddButton';
import NumberField from '../components/NumberField';
import Timer from '../components/Timer';
import styles from './home.module.css';

function Home() {
    const [ hideControllers, setHideControllers ] = useState(true);
    const [ timerInput, setTimerInput ] = useState(30);
    const [ isRunning, setIsRunning ] = useState(false);
    
    const { timersList,
        setTimersList,
        globalTimer,
        setGlobalTimer,
        highestTimer,
        setHighestTimer } = useTimersContext({});
    
    useEffect(()=> {
        let timerInterval;
        if(isRunning && globalTimer > 0) {
            timerInterval = setInterval(() => {
                setGlobalTimer( globalTimer - 1)
            }, 1000);
        } else if(globalTimer === 0) {
            timerState(false);
            setGlobalTimer(highestTimer);
            clearInterval(timerInterval);
        }
        console.log("globalTimer", globalTimer, "isRunning", isRunning);
        return () => clearInterval(timerInterval);
    }, [isRunning, globalTimer])

    const handleAddTimer = (e) => {
        if(timerInput > 0) {
            if(highestTimer < timerInput) setHighestTimer(timerInput);
            setTimersList(prev => [...prev, timerInput])
            setTimerInput(0);
        }
    }

    const handleTimerInput = (value) => {
        setTimerInput(parseInt(value));
    }

    const handleResetAllTimers = () => {
        timerState(false);
        setGlobalTimer(highestTimer);
    }

    const handleDeleteAllTimers = () => {
        timerState(false);
        setTimersList([]);
        setHighestTimer(0); 
    }

    const handleStartAllTimers = () => {
        setGlobalTimer(highestTimer);
        timerState(true);
    }

    const timerState = (isOn) => {
        setIsRunning(isOn);
        setHideControllers(!isOn);
    }

    return (
        <div className={styles.pageRoot}>
            <section className={styles.manageTimers}>
                <div className={styles.addNewTimer}>
                    <AddButton type="button" text="add new" handleClick={ handleAddTimer } />
                    <NumberField name="addTimerInput"
                                 value={ timerInput }
                                 onChangeHandler={ handleTimerInput }
                                 placeholder="add a timer" />
                </div>
                <PrimaryButton text="reset all timers" handleClick={ handleResetAllTimers }/>
                <PrimaryButton text="delete all timers" handleClick={ handleDeleteAllTimers }/>
                <PrimaryButton text="start all timers" handleClick={ handleStartAllTimers }/>
            </section>
            { !hideControllers && <section className="timers-controllers">timers controllers</section> }
            <section className={styles.timersList}>
                { timersList && timersList.map((timer, index) => {
                    return <Timer key={index} value={ timer } />
                })}
            </section>
        </div>
    )
}

export default Home;