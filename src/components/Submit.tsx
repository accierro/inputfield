import * as React from "react";
import styled from "styled-components";
import { colors } from "../colorConfig";

type SubmitProps = {
  placeholder: string;
  disabled?: boolean;
};

const SubmitButton = styled.input`
  font-size: 20px;
  font-weight: normal;
  padding: 6px;
  appearance: none;
  border: none;
  border-radius: 8px;
  background: ${colors.active};
  color: white;
  width: 100%;
  outline: none;

  &:disabled {
    background: ${colors.lightGrey};
    cursor: not-allowed !important;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${colors.active}88;
  }

  &:active {
    background: ${colors.darkerActive};
  }

  &:hover {
    cursor: pointer;
  }
`;

const Submit: React.FC<SubmitProps> = ({ placeholder, disabled = false }) => {
  return <SubmitButton type="submit" value={placeholder} disabled={disabled} />;
};
export default Submit;
