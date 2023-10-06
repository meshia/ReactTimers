import { StyledButton } from './PrimaryButton';
import PauseIcon from '@mui/icons-material/Pause';

const PauseButton = ({ text, handleClick }) => {
    return (
        <StyledButton onClick={ handleClick }>
            { text }
            <PauseIcon fontSize='inherit' />
        </StyledButton>
    )
}

export default PauseButton;