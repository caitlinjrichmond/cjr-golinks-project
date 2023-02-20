import React from "react"
import CommitDetails from "./CommitDetails"
import "./Commits.css"

// Commits List contains the unordered list that will hold each commit.
// each list item contains individual commit details

function CommitsList({ handleClick, commits }) {

    return (
        <>
            <div className="d-flex mt-2">
                <p className="back-to-repo"
                    style={{ marginLeft: "5px", fontSize: "16px", fontWeight: "500" }}
                    onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        className="bi bi-chevron-double-left"
                        viewBox="0 0 16 16">
                        <path
                            fill-rule="evenodd"
                            d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        <path
                            fill-rule="evenodd"
                            d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                    {" "} Back to Repo</p>
            </div>
            <div className="d-flex scrollbox-c">
                <ul className="commit-list">
                    {commits.map((commit) =>
                        <li key={commit.sha} style={{ listStyleType: "none" }}>
                            <CommitDetails
                                username={{ ...commit.author }}
                                hash={commit.sha}
                                created={commit.commit.author.date}
                                backup={{ ...commit.commit.committer }}
                                message={commit.commit.message}
                            />
                            <br />
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default CommitsList;