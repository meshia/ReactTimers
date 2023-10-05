import { useEffect, useState } from "react";
import { useTimersContext } from "../context/timersContext";
import AddButton from '../components/AddButton';
import NumberField from '../components/NumberField';
import Timer from '../components/Timer';
import styles from './home.module.css';

function Home() {
    const [ hideControllers, setHideControllers ] = useState(true);
    const [ timerInput, setTimerInput ] = useState(0);
    const { timersList,
        setTimersList,
        globalTimer,
        setGlobalTimer } = useTimersContext({});
    
    useEffect(()=> {
        console.log("globalTimer", globalTimer)
    })

    const handleAddTimer = (e) => {
        if(timerInput > 0) {
            setTimersList(prev => [...prev, timerInput])
            setTimerInput(0);
            console.log("timersList", timersList)
        }
    }

    const handleTimerInput = (value) => {
        setTimerInput(value);
    }

    return (
        <div className={styles.pageRoot}>
            <section className="manage-timers">
                <div className="add-new-timer">
                    <AddButton type="button" text="add new" handleClick={ handleAddTimer } />
                    <NumberField name="addTimerInput"
                                 value={ timerInput }
                                 onChangeHandler={ handleTimerInput }
                                 placeholder="add a timer" />
                </div>
            </section>
            { !hideControllers && <section className="timers-controllers">timers controllers</section> }
            <section className={styles.timersList}>
                { timersList && timersList.map((timer) => {
                    return <Timer value={ timer } />
                })}
            </section>
        </div>
    )
}

export default Home;