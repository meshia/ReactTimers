import { StyledButton } from './PrimaryButton';
import StopIcon from '@mui/icons-material/Stop';

const StopButton = ({ text, handleClick }) => {
    return (
        <StyledButton onClick={ handleClick }>
            { text }
            <StopIcon fontSize='inherit' />
        </StyledButton>
    )
}

export default StopButton;