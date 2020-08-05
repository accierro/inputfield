import * as React from "react";
interface CheckboxProps {
    id: string;
    disabled?: boolean;
    label: string | React.ReactElement;
    value: boolean;
    onChange: (r: boolean) => void;
}
declare const Checkbox: React.FC<CheckboxProps>;
export { Checkbox };
