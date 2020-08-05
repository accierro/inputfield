import * as React from "react";
import PasswordInput from "../components/PasswordInput";

export default {
  title: "Password",
};

export const withLabel = () => {
  function Parent({ children, ...props }) {
    const [state, setState] = React.useState("");
    return <div>{children(state, setState)}</div>;
  }

  return (
    <Parent>
      {(state, setState) => (
        <PasswordInput
          id="password"
          label="Password"
          value={state.value}
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
        <PasswordInput
          id="password"
          error="Not matching"
          label="Password"
          value={state.value}
          onChange={(s) => setState(s)}
        />
      )}
    </Parent>
  );
};

export const withAutoComplete = () => {
  function Parent({ children, ...props }) {
    const [state, setState] = React.useState("");
    return <div>{children(state, setState)}</div>;
  }

  return (
    <Parent>
      {(state, setState) => (
        <PasswordInput
          id="password"
          autocomplete="new-password"
          label="Password"
          value={state.value}
          onChange={(s) => setState(s)}
        />
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
        <PasswordInput
          id="password"
          disabled
          disabledReason="Because I can"
          autocomplete="new-password"
          label="Password"
          value={state.value}
          onChange={(s) => setState(s)}
        />
      )}
    </Parent>
  );
};
