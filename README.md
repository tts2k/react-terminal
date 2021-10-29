# react-terminal

🖥 React component that renders a Terminal. Heavily based on the package by [bony2023](https://github.com/bony2023/react-terminal).

## Features

- Mobile support. 📱
- Customizable commands, prompt and error message. ✅
- Support callbacks(async/non-async) for commands. 🔄
- Command history using arrow up and down. 🔼
- In-built themes and support to create more. 🚀

## Installation

Install package with NPM or YARN and add it to your development dependencies:

```sh
npm install react-terminal
```

## Usage

```js
import { ReactTerminal } from "react-terminal";

function MyComponent(props) {
  const commands = {
    whoami: "jackharper",
    cd: (directory) => `changed path to ${directory}`,
  };

  return <ReactTerminal commands={commands} />;
}
```

Also make sure to wrap the main mountpoint around the `TerminalContextProvider`. This retains the state even when the component is unmounted and then mounted back:

```js
import { TerminalContextProvider } from "react-terminal";

ReactDOM.render(
  <TerminalContextProvider>
    <App />
  </TerminalContextProvider>,
  rootElement,
);
```

## Creating custom themes

The component comes with few in-built themes: `light`, `dark`, `material-light`, `material-dark`, `material-ocean` and `matrix`. You can also create custom themes by passing `themes` parameter in props, as follows:

```js
<ReactTerminal
commands={commands}
themes={{
    my-custom-theme: {
      background: "#272B36",
      color: "#FFFEFC",
      promptColor: "#a917a8",
      fontFamily: "'Source Code Pro', monospace",
      fontSize: "18px",
      lineHeight: "1.5",
      padding: "1em 1.5em",
    }
  }}
theme="my-custom-theme"
/>
```

## Props

| name                 | description                                                                                             | default              |
| -------------------- | ------------------------------------------------------------------------------------------------------- | -------------------- |
| `welcomeMessage`     | A welcome message to show at the start, before the prompt begins. Value can be either a string or JSX   | null                 |
| `prompt`             | Terminal prompt                                                                                         | ~$                   |
| `commands`           | List of commands to be provided as a key value pair where value can be either a string, JSX or callback | null                 |
| `errorMessage`       | Message to show when unidentified command executed                                                      | "Command not found." |
| `enableInput`        | Whether to enable user input                                                                            | true                 |
| `showControlBar`     | Whether to show the top control bar                                                                     | true                 |
| `showControlButtons` | Whether to show the control buttons at the top bar of the terminal                                      | true                 |
| `theme`              | Theme of the terminal                                                                                   | "light"              |
| `themes`             | Themes object to supply custom themes                                                                   | null                 |

## In-built commands

| command | description        |
| ------- | ------------------ |
| `clear` | Clears the console |
