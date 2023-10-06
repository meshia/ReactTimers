import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import DynamicIcon from './DynamicIcon';

const StyledIconButton = styled(Button)({
    textTransform: 'capitalize',
    padding: '6px 10px',
    margin: '6px 10px',
    backgroundColor: 'var(--base-button)',
    color: 'var(--base-text)',
    '&:hover': {
        backgroundColor: 'var(--base-button-hover)',
    }
})

const IconButton = ({ text, iconName, handleClick }) => {
    return (
        <StyledIconButton onClick={ handleClick }>
            { text }
            {/* <DynamicIcon iconName={iconName} /> */}
        </StyledIconButton>
    )
}

export default IconButton;