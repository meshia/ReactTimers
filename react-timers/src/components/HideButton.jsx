import { StyledButton } from './PrimaryButton';
import HideIcon from '@mui/icons-material/VisibilityOff';

const HideButton = ({ text, handleClick }) => {
    return (
        <StyledButton onClick={ handleClick }>
            { text }
            <HideIcon fontSize='inherit' />
        </StyledButton>
    )
}

export default HideButton;