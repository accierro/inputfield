import * as React from "react";
import TextInput from "./TextInput";

export default {
  title: "Input",
};

export const withLabel = () => {
  function Parent({ children, ...props }) {
    const [state, setState] = React.useState("");
    return <div>{children(state, setState)}</div>;
  }

  return (
    <Parent>
      {(state, setState) => (
        <TextInput
          label="Simple Label"
          value={state.value}
          onChange={(s) => setState(s)}
        />
      )}
    </Parent>
  );
};
export const optional = () => {
  function Parent({ children, ...props }) {
    const [state, setState] = React.useState("");
    return <div>{children(state, setState)}</div>;
  }

  return (
    <Parent>
      {(state, setState) => (
        <TextInput
          label="Simple Label"
          optional={true}
          value={state}
          onChange={(s) => setState(s)}
        />
      )}
    </Parent>
  );
};

export const withValue = () => {
  function Parent({ children, ...props }) {
    const [state, setState] = React.useState("Hello");
    return <div>{children(state, setState)}</div>;
  }

  return (
    <Parent>
      {(state, setState) => (
        <TextInput
          label="Simple Label"
          optional={true}
          value={state}
          onChange={(s) => setState(s)}
        />
      )}
    </Parent>
  );
};

export const withError = () => {
  function Parent({ children, ...props }) {
    const [state, setState] = React.useState("");
    return <div>{children(state, setState)}</div>;
  }

  return (
    <Parent>
      {(state, setState) => (
        <>
          <TextInput
            label="Simple Label"
            optional={true}
            error="Can't be empty"
            value={state}
            onChange={(s) => setState(s)}
          />
        </>
      )}
    </Parent>
  );
};

export const disabled = () => {
  function Parent({ children, ...props }) {
    const [state, setState] = React.useState("");
    return <div>{children(state, setState)}</div>;
  }

  return (
    <Parent>
      {(state, setState) => (
        <>
          <TextInput
            label="Simple Label"
            disabled
            disabledReason="Because I can"
            optional={true}
            value={state}
            onChange={(s) => setState(s)}
          />
        </>
      )}
    </Parent>
  );
};
