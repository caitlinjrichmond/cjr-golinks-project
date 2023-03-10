import React from "react";
import "./Commits.css"

// Component renders a card that holds a card containing commit details
// commit author username, date created, title (description), and hash

function CommitDetails({ username, hash, created, backup, message }) {

    // function formats date string to DD/MM/YYY
    function formatDate(date) {
        return new Date(date).toLocaleDateString();
    };

    return (
        <>
            <div className="card commit-card">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <p className="card-text commit-text" style={{ color: "#000", backgroundColor: "#FFBE0B" }}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-person-circle"
                                viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg> 
                            {" "} {username.login ? username.login : backup.name}
                        </p>
                        <p className="card-text commit-text" style={{ color: "#000", backgroundColor: "#00D0FF" }}>Created: {formatDate(created)}</p>
                    </div>
                    <br />
                    <p className="description" style={{ fontSize: "14px" }}> {message}</p>
                    <span className="hash-text" style={{ color: "#000", backgroundColor: "#C792E4" }}>{hash}</span>
                </div>
            </div>
        </>
    );
};

export default CommitDetails;