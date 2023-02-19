import React from "react"
import CommitDetails from "./CommitDetails"
import "./Commits.css"

function CommitsList({ darkMode, commits }) {

    function backColor() {
        if (darkMode) {
            return "#F8F9FA"
        } else {
            return "#595959"
        }
    }

    function textColor() {
        if (darkMode) {
            return "#343A40"
        } else {
            return "#FFF"
        }
    }

    return (
        <>
            <div className="d-flex mt-2">
                <p style={{ marginLeft: "5px", fontSize: "16px", fontWeight: "500" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                    {" "} Back to Repo</p>
            </div>
            <div className="d-flex" id="scrollbox-c">
                <ul className="commit-list">

                    {commits.map((commit) =>
                        <li key={commit.sha} style={{ listStyleType: "none" }}>
                            <CommitDetails username={{ ...commit.author }} hash={commit.sha} created={commit.commit.author.date} backup={{ ...commit.commit.committer }} message={commit.commit.message} darkMode={darkMode} />
                            <br />
                        </li>

                    )}

                </ul>
            </div>
        </>
    )
}

export default CommitsList