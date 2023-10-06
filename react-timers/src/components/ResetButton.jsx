import { StyledButton } from './PrimaryButton';
import ResetIcon from '@mui/icons-material/RestartAlt';

const ResetButton = ({ text, handleClick }) => {
    return (
        <StyledButton onClick={ handleClick }>
            { text }
            <ResetIcon fontSize='inherit' />
        </StyledButton>
    )
}

export default ResetButton;