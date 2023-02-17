import React from "react"
import CommitDetails from "./CommitDetails"
import "./Commits.css"

function CommitsList({ commits }) {

    return (
        <div>
            {" "}
            <div id="scrollbox-c">
                <center><h4>All Commits</h4></center>
            <ul>
                {commits.map((commit) =>
                    <li key={commit.sha} style={{ listStyleType: "none" }}>
                        <CommitDetails username={{...commit.author}} hash={commit.sha} created={commit.commit.author.date} backup={{...commit.commit.committer}} message={commit.commit.message}/>
                    </li>
                )}
            </ul>
            </div>
        </div>
    )
}

export default CommitsList