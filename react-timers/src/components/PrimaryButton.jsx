import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)({
    textTransform: 'capitalize',
    padding: '6px 10px',
    margin: '6px 10px',
    backgroundColor: 'var(--base-button)',
    color: 'var(--base-text)',
    '&:hover': {
        backgroundColor: 'var(--base-button-hover)',
    }
})

const PrimaryButton = ({ text, handleClick }) => {
    return (
        <StyledButton onClick={ handleClick }>
            { text }
        </StyledButton>
    )
}

export default PrimaryButton;