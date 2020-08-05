import * as React from "react";
import Submit from "./Submit";

export default {
  title: "Submit",
};

export const defaultCheckbox = () => {
  return <Submit placeholder="Submit" />;
};

export const disabled = () => {
  return <Submit placeholder="Submit" disabled={true} />;
};
