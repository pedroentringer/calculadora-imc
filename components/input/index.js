import { InputContainer, InputLabel, TextInput } from "./styles";

const Input = ({ label, value, placeholder, onChangeText }) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <TextInput
        value={value}
        keyboardType="numeric"
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </InputContainer>
  );
};

export default Input;
