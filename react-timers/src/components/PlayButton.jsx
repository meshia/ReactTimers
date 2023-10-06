import { StyledButton } from './PrimaryButton';
import PlayIcon from '@mui/icons-material/PlayArrow';

const PlayButton = ({ text, handleClick }) => {
    return (
        <StyledButton onClick={ handleClick }>
            { text }
            <PlayIcon fontSize='inherit' />
        </StyledButton>
    )
}

export default PlayButton;