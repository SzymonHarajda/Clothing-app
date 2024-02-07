import { FornmInputLabel, Input, Group } from './form-input.styles.jsx';
const FornmInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FornmInputLabel shrink={otherProps.value.length}>
          {label}
        </FornmInputLabel>
      )}
    </Group>
  );
};

export default FornmInput;
