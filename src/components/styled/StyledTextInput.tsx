import styled from "styled-components";
import { colors } from "../static/colorConfig";

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
  transition: border-color 0.3s, box-shadow 0.2s;

  &:disabled {
    background: ${colors.lightestGrey};
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    border: 1px solid ${colors.active};
    box-shadow: 0px 0px 3px ${colors.active}88;
  }
`;

export default StyledTextInput;
