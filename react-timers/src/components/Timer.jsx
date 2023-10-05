import { styled } from "@mui/material/styles";

const StyledTimer = styled('div')({
    borderRadius: '4em',
    color: 'var(--base-text)',
    backgroundColor: 'var(--timer-background)',
    width: '4em',
    height: '4em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0.5em'
})

const Timer = ({ value }) => {
    return (
        <StyledTimer>
            <h2>{ value }</h2>
        </StyledTimer>
    )
}

export default Timer;