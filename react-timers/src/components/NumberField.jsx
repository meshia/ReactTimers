import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const StyledNumberField = styled(TextField)({
    justifyContent: 'center',
    width: '3em',
    input: {
        borderRadius: '4px',
        border: 'none',
        boxShadow: 'none',
        outline: 'none',
        backgroundColor: 'var(--base-input-background)',
    }
});

const NumberField = ({ name, value, onChangeHandler, placeholder}) => {
    return (
        <StyledNumberField
            name={name}
            type="number"
            value={value}
            onChange={(e) => onChangeHandler(e.target.value)}
            placeholder={placeholder}
            variant="outlined"
            size="small"
            />
    )
}

export default NumberField;