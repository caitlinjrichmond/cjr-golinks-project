import React from "react"
import CommitDetails from "./CommitDetails"
import "./Commits.css"

function CommitsList({ commits }) {

    return (
        <div>
            <ul>
                <div className="d-flex mt-2">
                    <h6>Commits</h6>
                </div>  
    
                <div id="scrollbox-c">
                    {commits.map((commit) =>
                        <li key={commit.sha} style={{ listStyleType: "none" }}>
                            <CommitDetails username={{ ...commit.author }} hash={commit.sha} created={commit.commit.author.date} backup={{ ...commit.commit.committer }} message={commit.commit.message} />
                            <br />
                        </li>

                    )}
                </div>
            </ul>
        </div>
    )
}

export default CommitsList