import React from "react"
import CommitDetails from "./CommitDetails"

function CommitsList({ commits }) {

    return (
        <div>
            {" "}
            <h4>All Commits</h4>
            <ul>
                {commits.map((commit) =>
                    <li key={commit.sha} style={{ listStyleType: "none" }}>
                        <CommitDetails username={{...commit.author}} hash={commit.sha} created={commit.commit.author.date} backup={{...commit.commit.committer}} message={commit.commit.message}/>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default CommitsList