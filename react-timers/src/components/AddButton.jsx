import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';

const StyledAddButton = styled(Button)({
    textTransform: 'capitalize',
    padding: '6px 10px',
    backgroundColor: 'var(--base-button)',
    color: 'var(--base-text)',
    '&:hover': {
        backgroundColor: 'var(--base-button-hover)',
    }
})

const AddButton = ({ text, handleClick }) => {
    return (
        <StyledAddButton onClick={ handleClick }>
            { text }
            <AddIcon fontSize='inherit' />
        </StyledAddButton>
    )
}

export default AddButton;