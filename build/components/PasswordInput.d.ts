import * as React from "react";
interface PasswordInputProps {
    id: string;
    label: string | React.ReactElement;
    value: string;
    disabled?: boolean;
    disabledReason?: string;
    error?: string;
    autocomplete?: "off" | "current-password" | "new-password";
    onChange: (s: string) => void;
}
declare const PasswordInput: React.FC<PasswordInputProps>;
export { PasswordInput };
