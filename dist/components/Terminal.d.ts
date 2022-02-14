/// <reference types="react" />
import PropTypes from "prop-types";
declare function Terminal(props: any): JSX.Element;
declare namespace Terminal {
    var propTypes: {
        enableInput: PropTypes.Requireable<boolean>;
        caret: PropTypes.Requireable<boolean>;
        theme: PropTypes.Requireable<string>;
        prompt: PropTypes.Requireable<string>;
        commands: PropTypes.Requireable<{
            [x: string]: PropTypes.ReactNodeLike;
        }>;
        welcomeMessage: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        errorMessage: PropTypes.Requireable<string | object>;
        onFocusChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    var defaultProps: {
        enableInput: boolean;
        caret: boolean;
        theme: string;
        prompt: string;
        commands: {};
        welcomeMessage: string;
        errorMessage: string;
        onFocusChange: () => void;
    };
}
export default Terminal;
