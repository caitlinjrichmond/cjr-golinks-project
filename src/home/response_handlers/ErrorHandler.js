import React from "react";
import "../Main.css"

// Error message is rendered if there does not exist repos for an input org
// or if there are no commits for a repo

function ErrorHandler({ message }) {

    return (
        <div className="d-flex error-name">
            <p style={{ marginLeft: "50px" }}>{message}</p>
        </div>
    );
};

export default ErrorHandler;