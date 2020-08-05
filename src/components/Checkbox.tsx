import * as React from "react";
import styled from "styled-components";
import { colors } from "../colorConfig";

type CheckboxProps = {
  id: string;
  disabled?: boolean;
  label: string | React.ReactElement;
  value: boolean;
  onChange: (r: boolean) => void;
};

const StyledCheckbox = styled.input`
  width: 21px;
  height: 21px;
  margin: 0;
  margin-right: 5px;
  appearance: none;
  border: 1px solid ${colors.lightGrey};
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;

  + label {
    cursor: pointer;
  }

  &:after {
    content: "";
    display: block;
    left: 0;
    top: 0;
    position: absolute;
    transition: opacity 0.2s transform 0.3s;
  }

  &:checked,
  &:not(:checked) {
    &:after {
      width: 4px;
      height: 10px;
      border: 2px solid white;
      border-top: 0;
      border-left: 0;
      left: 7px;
      top: 2px;
      transform: rotate(34deg);
    }
  }

  &:checked {
    background: ${colors.active};
    border-color: ${colors.active};
    &:after {
      opacity: 1;
    }
  }

  &:not(:checked) {
    &:after {
      opacity: 0;
      transform: rotate(24deg);
    }
  }

  &:focus {
    outline: none;
    border-color: ${colors.active};
    box-shadow: 0px 0px 0px 3px ${colors.active}88;
  }

  &:hover {
    border-color: ${colors.active};
  }

  &:disabled {
    cursor: not-allowed;
    border-color: ${colors.lightGrey};

    + label {
      cursor: not-allowed;
    }
    &:not(:checked) {
      background: ${colors.lightestGrey};
    }

    &:checked {
      background: ${colors.lightGrey};
    }
  }
`;

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  disabled = false,
  value,
  onChange,
}) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <StyledCheckbox
        type="checkbox"
        id={id}
        checked={value}
        disabled={disabled}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
      <label
        htmlFor={id}
        style={{ color: disabled ? colors.darkGrey : colors.black }}
      >
        {label}
      </label>
    </div>
  );
};
export default Checkbox;
