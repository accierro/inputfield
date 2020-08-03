import * as React from "react";
import styled from "styled-components";
import { IoIosWarning, IoIosEye } from "react-icons/io";

import { colors } from "../colorConfig";

import StyledTextInput from "../styled/StyledTextInput";
import Label from "../styled/Label";

import IconWithMessage from "./IconWithMessage";

type PasswordInputProps = {
  id: string;
  label: string | React.ReactElement;
  value: string;
  error?: string;
  autocomplete?: "off" | "current-password" | "new-password";
  onChange: (s: string) => void;
};

const Touchable = styled.div`
  cursor: pointer;
  border-radius: 50%;
  padding: 3px;

  &:active,
  &:focus {
    background: ${colors.lightGrey};
  }
`;

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  label = "password",
  value,
  error,
  autocomplete = "off",
  onChange,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const onChangeHandler = React.useCallback(
    (e) => {
      onChange(e.target.value);
    },
    [onChange]
  );
  // const onBlurHandler = React.useCallback(
  //   (e) => {
  //     if (validationFn) {
  //       const result = validationFn(e.target.value);
  //       if (result.error) {
  //         setInternalError(result.message ?? "Validation error");
  //       } else {
  //         setInternalError(null);
  //       }
  //     }
  //   },
  //   [validationFn]
  // );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column-reverse",
      }}
    >
      <div style={{ position: "relative" }}>
        <StyledTextInput
          id={id}
          style={{ paddingRight: "35px" }}
          autoComplete={autocomplete}
          error={error !== undefined}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChangeHandler}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
        />
        <Touchable
          style={{
            position: "absolute",
            bottom: 1,
            right: 4,
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
        >
          <IoIosEye size={25} />
        </Touchable>
      </div>
      <Label
        color={
          isFocused
            ? colors.active
            : error !== undefined
            ? colors.error
            : undefined
        }
        htmlFor={id}
      >
        {label}
        {error && (
          <IconWithMessage
            icon={
              <IoIosWarning
                size={20}
                color={colors.error}
                style={{ marginLeft: "8px" }}
              />
            }
            message={error}
          />
        )}
      </Label>
    </div>
  );
};

export default PasswordInput;
