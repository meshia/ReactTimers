import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import HideButton from "./HideButton";
import { useTimersContext } from "../context/timersContext";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const StyledTimer = styled('div')({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '4em',
    color: 'var(--base-text)',
    backgroundColor: 'var(--timer-background)',
    width: '4em',
    height: '4em',
    padding: '1em',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0.5em',
    h4: {
        position: 'absolute',
        top: '-0.1em',
        margin: '0',
    },
    h2: {
        margin: '0',
    },
    button: {
        position: 'absolute',
        bottom: '0',
    },
    '&.hide': {
        width: '0.5em',
        height: '0.5em',
        padding: '0.5em',
        h4: {
            display: 'none'
        },
        h2: {
            display: 'none'
        }
    },
    '.recharts-wrapper': {
        position: 'absolute !important',
        pointerEvents: 'none',
        zIndex: '-1'
    }
})

const Timer = ({ value }) => {
    const [ minutes, setMinutes ] = useState("00");
    const [ seconds, setSeconds ] = useState("00");
    const [ displayValue, setDisplayValue ] = useState("");
    const [ hideTimer, setHideTimer ] = useState(false);
    const { highestTimer, globalTimer } = useTimersContext({});
    const [ pieData, setPieData ] = useState([
        { name: 'Group A', value: 0 },
        { name: 'Group B', value: 0 },
    ]);
    const COLORS = ['#000000', '#00fee9'];

    useEffect(()=>{
        setDisplayValue(
            `${String(Math.floor(value / 60)).padStart(2, '0')}:${String(value % 60).padStart(2, '0')}`
        )
        setPieData([
            { name: 'Group A', value: 0 },
            { name: 'Group B', value: parseInt(value) },
        ])
    },[])

    useEffect(()=> {
        if(highestTimer - globalTimer <= value) {
            setMinutes(String(Math.floor(globalTimer / 60)).padStart(2, '0'));
            setSeconds(String(globalTimer % 60).padStart(2, '0'));
            console.log("chart", value, globalTimer, (globalTimer / value) * 100);
            setPieData([
                { name: 'Group A', value: (globalTimer / value)  * 100 },
                { name: 'Group B', value: parseInt(value) },
            ])
        } else {
            setMinutes("00");
            setSeconds("00");
            setPieData([
                { name: 'Group A', value: 0 },
                { name: 'Group B', value: parseInt(value) },
            ])
        }
        
    },[ globalTimer ]);

    const handleHide = () => {
        setHideTimer(!hideTimer);
    }

    return (
        <StyledTimer className={hideTimer ? 'hide' : ''}>
            <h4>{ displayValue }</h4>
            <h2>{ `${minutes}:${seconds}` }</h2>
            <HideButton handleClick={ handleHide } />
            { !hideTimer &&
                <PieChart width={800} height={400}>
                    <Pie
                    data={pieData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={0}
                    dataKey="value"
                    >
                    {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                </PieChart>
            }
        </StyledTimer>
    )
}

export default Timer;