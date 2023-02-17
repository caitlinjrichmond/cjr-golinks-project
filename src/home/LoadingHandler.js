import React from "react";


function LoadingHandler({repoError, commitError, orgName}) {

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
        <>
       { noErrors() ? <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
    </div> : <p> {message()} </p>}
    </>
    )
}

export default LoadingHandler;