import { useEffect, useState } from "react";
import { useTimersContext } from "../context/timersContext";
import PrimaryButton from '../components/PrimaryButton';
import AddButton from '../components/AddButton';
import PauseButton from '../components/PauseButton';
import PlayButton from '../components/PlayButton';
import StopButton from '../components/StopButton';
import ResetButton from '../components/ResetButton';
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
        if(isRunning && globalTimer < highestTimer) {
            timerInterval = setInterval(() => {
                setGlobalTimer( globalTimer + 1);
            }, 1000);
        } else if(globalTimer === highestTimer) {
            timerState(false);
            clearInterval(timerInterval);
        }
        // console.log("globalTimer", globalTimer, "highestTimer", highestTimer, "isRunning", isRunning);
        return () => clearInterval(timerInterval);
    }, [isRunning, globalTimer])

    const handleAddTimer = (e) => {
        if(timerInput > 0) {
            if(highestTimer < timerInput) {
                setHighestTimer(timerInput);
            };
            setTimersList(prev => [...prev, timerInput])
            setTimerInput(0);
        }
    }

    const handleTimerInput = (value) => {
        setTimerInput(parseInt(value));
    }

    const handleResetAllTimers = (replay=false) => {
        timerState(false);
        setGlobalTimer(0);
        if(replay) {
            timerState(true);
        }
    }

    const handleDeleteAllTimers = () => {
        timerState(false);
        setTimersList([]);
        setHighestTimer(0);
        setGlobalTimer(0);
    }

    const handleStartAllTimers = () => {
        if(globalTimer === highestTimer) setGlobalTimer(0);
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
                <PrimaryButton text="reset all" handleClick={ ()=>handleResetAllTimers(false) }/>
                <PrimaryButton text="delete all" handleClick={ handleDeleteAllTimers }/>
                <PrimaryButton text="start all" handleClick={ handleStartAllTimers }/>
            </section>
            { !hideControllers && <section className={styles.timersControllers}>
                <PauseButton text="" handleClick={ ()=>setIsRunning(false) }/>
                <PlayButton text="" handleClick={ ()=>setIsRunning(true) }/>
                <StopButton text="" handleClick={ ()=>timerState(false) }/>
                <ResetButton text="" handleClick={ ()=>handleResetAllTimers(true) }/>
            </section> }
            <section className={styles.timersList}>
                { timersList && timersList.map((timer, index) => {
                    return <Timer key={index} value={ timer } />
                })}
            </section>
        </div>
    )
}

export default Home;