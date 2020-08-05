import * as React from "react";
interface TextInputProps {
    id: string;
    label: string;
    value: string;
    disabled?: boolean;
    disabledReason?: string;
    optional?: boolean;
    error?: string;
    onChange: (s: string) => void;
}
declare const TextInput: React.FC<TextInputProps>;
export { TextInput };
