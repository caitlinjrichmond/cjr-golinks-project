import React from "react";

function RepoDetails({ repo }) {

    function formatDate(date) {
        return new Date(date).toLocaleDateString()
    }

    function formatDesc(desc) {
        let endingPunc = [".", "!", "?"]
        let lastChar = desc[desc.length -1]
        if (!endingPunc.includes(lastChar)) {
            desc = desc + "."
        }

        return desc
    }

    return (
        <>
            <div className="card-body">

                <p className="card-text">
                    {repo.description? formatDesc(repo.description) : "Click to see commits."}
                 
                    <div className="d-flex justify-content-between repo-details">
                       { repo.language ? <span id="language"> {repo.language} </span> : <span> {" "} </span>}
                        <div>
                            Created: {formatDate(repo.created_at)}
                        </div>
                    </div>
                </p>

            </div>
        </>
    )
}

export default RepoDetails