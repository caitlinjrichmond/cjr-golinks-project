import React from "react";
import "../Main.css"

// Spinner is rendered while the GET request is awaiting response from the API

function LoadingHandler() {

    return (
        <div className="d-flex loader">
            <div className="spinner-border" style={{ color: "#C792E4", marginLeft: "auto", marginRight: "auto" }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default LoadingHandler;