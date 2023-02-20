import React from "react";
import "../Main.css"

// Error message is rendered if there does not exist repos for an input org
// or if there are no commits for a repo

function ErrorHandler({ darkMode, message }) {

    // function specifies text styling dependent on whether dark or light mode is selected
    function textColor() {
        if (darkMode) {
            return "#00D0FF"
        } else {
            return "#343A40"
        }
    }

    return (
        <div className="d-flex error-name">
            <p style={{ marginLeft: "auto", marginRight: "auto", color: textColor() }}>{message}</p>
        </div>
    );
};

export default ErrorHandler;