import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const StyledNumberField = styled(TextField)({
   borderRadius: '4px',
   backgroundColor: 'var(--base-input-background)',
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