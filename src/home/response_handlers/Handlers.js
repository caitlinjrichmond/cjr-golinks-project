import React from "react";
import LoadingHandler from "./LoadingHandler";
import ErrorHandler from "./ErrorHandler";
import "../Main.css"

// The Handlers are responsible for rendering a response of "loading" or an error message
// if there are errors, the error handler is rendered.
// if the data is simply loading, a spinner is shown 

function Handlers({ background, repoError, commitError, orgName }) {

    // function checks if an error occured during a GET request for repos and/or commits
    function noErrors() {
        return !repoError && !commitError;
    };

    // function determines the message to show depending on error type
    function message() {
        if (repoError) {
            return `We're sorry, there are no results for Repos for the organization "${orgName}".`;
        };

        if (commitError) {
            return "We're sorry, there are no commmits for this Repo.";
        };
    };

    return (
        <div className="handlers" style={{ backgroundColor: background, height: "100vh" }}>
            {noErrors() ? <LoadingHandler /> : <ErrorHandler message={message()} />}
        </div>
    );
};

export default Handlers;