import React from "react";
import "./Main.css"


function LoadingHandler({ darkMode, background, repoError, commitError, orgName }) {

    function noErrors() {
        return !repoError && !commitError
    }

    const message = () => {
        if (repoError) {
            return `We're sorry, there are not any results for Repos for the organization ${orgName}.`
        }

        if (commitError) {
            return "We're sorry, there are no commmits for this Repo."
        }
    }

    return (
        <div className="loading-or-errors" style={{ backgroundColor: background, height: "100vh" }}>
            {noErrors() ? <div id="loader" className="spinner-border" style={{ color: "#C792E4" }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div> : <p> {message()} </p>}
        </div>
    )
}

export default LoadingHandler;