import * as React from "react";
import styled from "styled-components";
import { IoIosWarning } from "react-icons/io";

import { colors } from "../colorConfig";
import StyledTextInput from "../styled/StyledTextInput";
import Label from "../styled/Label";

import IconWithMessage from "./IconWithMessage";

type TextInputProps = {
  label: string;
  optional?: boolean;
  value: string;
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
  label,
  optional = false,
  value,
  error,
  onChange,
}) => {
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
        error={error !== undefined}
        type="text"
        value={value}
        onChange={onChangeHandler}
      />
      <Label error={error !== undefined}>
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
