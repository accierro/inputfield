import styled from "styled-components";
import { colors } from "../colorConfig";

type StyledTextInputProps = {
  error?: boolean;
};

const StyledTextInput = styled.input`
  height: 34px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid
    ${(props: StyledTextInputProps) =>
      props.error ? colors.error : colors.lightGrey};
  padding: 4px;
  font-size: 16px;
  width: 100%;

  &:focus {
    outline: none;
    border: 1px solid ${colors.active};
    box-shadow: 0px 0px 3px ${colors.active}88;
  }

  &:focus ~ label {
    color: ${colors.active};
  }
`;

export default StyledTextInput;
