import * as React from "react";

import { colors } from "../colorConfig";

type IconWithMessageProps = {
  icon: React.ReactNode;
  message: string;
};

const Message: React.FC<{ message: string }> = ({ message }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      ref.current.style.marginLeft = `-${rect.width / 2}px`;

      if (rect.y < 5) {
        ref.current.style.top = "100%";
        ref.current.style.bottom = "unset";
      }
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        border: "1px solid " + colors.error,
        background: colors.lightError,
        color: colors.error,
        borderRadius: "8px",
        minWidth: "130px",
        maxWidth: "200px",
        padding: "4px",
        bottom: "100%",
        left: "50%",
        marginLeft: "-50%",
        boxShadow: "0 0 3px rgba(0,0,0, 0.3)",
        textAlign: "center",
      }}
    >
      {message}
    </div>
  );
};

const IconWithMessage: React.FC<IconWithMessageProps> = ({ icon, message }) => {
  const [showMessage, setShowMessage] = React.useState(false);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
      onMouseEnter={() => {
        setShowMessage(true);
      }}
      onMouseLeave={() => {
        setShowMessage(false);
      }}
    >
      {icon}
      {showMessage && <Message message={message} />}
    </div>
  );
};
export default IconWithMessage;
