import * as React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Checkbox",
};

export const defaultCheckbox = () => {
  function Parent({ children, ...props }) {
    const [state, setState] = React.useState(true);
    return <div>{children(state, setState)}</div>;
  }

  return (
    <Parent>
      {(state, setState) => (
        <Checkbox
          id="checkbox"
          label="You agree with our terms and condicions"
          value={state}
          onChange={(r) => setState(r)}
        />
      )}
    </Parent>
  );
};

export const labelAsReactElement = () => {
  function Parent({ children, ...props }) {
    const [state, setState] = React.useState(true);
    return <div>{children(state, setState)}</div>;
  }

  return (
    <Parent>
      {(state, setState) => (
        <Checkbox
          id="checkbox"
          label={
            <>
              You agree with{" "}
              <span style={{ textDecoration: "underline", color: "blue" }}>
                that
              </span>
            </>
          }
          value={state}
          onChange={(r) => setState(r)}
        />
      )}
    </Parent>
  );
};

export const disabledChecked = () => {
  function Parent({ children, ...props }) {
    const [state, setState] = React.useState(true);
    return <div>{children(state, setState)}</div>;
  }

  return (
    <Parent>
      {(state, setState) => (
        <Checkbox
          id="checkbox"
          disabled
          label={
            <>
              You agree with{" "}
              <span style={{ textDecoration: "underline", color: "blue" }}>
                that
              </span>
            </>
          }
          value={state}
          onChange={(r) => setState(r)}
        />
      )}
    </Parent>
  );
};

export const disabledUnchecked = () => {
  function Parent({ children, ...props }) {
    const [state, setState] = React.useState(false);
    return <div>{children(state, setState)}</div>;
  }

  return (
    <Parent>
      {(state, setState) => (
        <Checkbox
          id="checkbox"
          disabled
          label={
            <>
              You agree with{" "}
              <span style={{ textDecoration: "underline", color: "blue" }}>
                that
              </span>
            </>
          }
          value={state}
          onChange={(r) => setState(r)}
        />
      )}
    </Parent>
  );
};
