import * as React from "react";
import styled from "styled-components";
import { IoIosWarning } from "react-icons/io";

import { colors } from "../colorConfig";
import StyledTextInput from "../styled/StyledTextInput";
import Label from "../styled/Label";

import IconWithMessage from "./IconWithMessage";

type TextInputProps = {
  id: string;
  label: string;
  value: string;
  disabled?: boolean;
  disabledReason?: string;
  optional?: boolean;
  error?: string;
  onChange: (s: string) => void;
};

const OptionalLabel = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: ${colors.mediumGrey};
  margin-left: 8px;
`;

const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  optional = false,
  disabled = false,
  disabledReason,
  value,
  error,
  onChange,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  // const [internalError, setInternalError] = React.useState<string | null>(null);

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
      <StyledTextInput
        id={id}
        disabled={disabled}
        title={disabled ? disabledReason : undefined}
        error={error !== undefined}
        type="text"
        value={value}
        onChange={onChangeHandler}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
      <Label
        disabled={disabled}
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
        {optional && <OptionalLabel>Optional</OptionalLabel>}
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

export default TextInput;
