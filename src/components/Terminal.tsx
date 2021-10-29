import * as React from "react";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";

import { StyleContext } from "../contexts/StyleContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { useClickOutsideEvent } from "../hooks/terminal";

import Editor from "./Editor";

export default function Terminal(props: any) {
  const wrapperRef = React.useRef(null);
  const [consoleFocused, setConsoleFocused] = React.useState(!isMobile);
  const style = React.useContext(StyleContext);
  const themeStyles = React.useContext(ThemeContext);

  useClickOutsideEvent(wrapperRef, consoleFocused, setConsoleFocused);

  const {
    caret,
    theme,
    prompt,
    commands,
    welcomeMessage,
    errorMessage,
    enableInput,
  } = props;

  const editor = (
    <Editor
      caret={caret}
      consoleFocused={consoleFocused}
      prompt={prompt}
      commands={commands}
      welcomeMessage={welcomeMessage}
      errorMessage={errorMessage}
      enableInput={enableInput}
    />
  );

  return (
    <div
      ref={wrapperRef}
      id={style.terminalContainer}
      className={style[`theme--${theme}`]}
    >
      <div
        className={`${style.terminal}`}
        style={{
          color: themeStyles.color,
        }}
      >
        {editor}
      </div>
    </div>
  );
}

Terminal.propTypes = {
  enableInput: PropTypes.bool,
  caret: PropTypes.bool,
  theme: PropTypes.string,
  prompt: PropTypes.string,
  commands: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.node]),
  ),
  welcomeMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.node,
  ]),
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Terminal.defaultProps = {
  enableInput: true,
  caret: true,
  theme: "light",
  prompt: "~$",
  commands: {},
  welcomeMessage: "",
  errorMessage: "Command not found.",
};
