import React from "react";


function LoadingHandler({error, orgName}) {

    return (
        <>
       { !error ? <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
    </div> : <p>We're Sorry, There Doesn't Seem to be Any Results for Repos for the organization {orgName}.</p>}
    </>
    )
}

export default LoadingHandler;