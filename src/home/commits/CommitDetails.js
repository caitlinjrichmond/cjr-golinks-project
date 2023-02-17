import React from "react";

function CommitDetails({username, hash, created, backup, message}) {

    function formatDate(date) {
        return new Date(date).toLocaleDateString()
    }
  
    return (
        <>
             <div className="card-body">
                <h5 className="card-title">  Commit Title: {message}</h5>
                <p className="card-text">      
                    <br />
                    Username: {username.login ? username.login : backup.name }
                    <br />
                    Hash: {hash}
                    <br />
                    Date Created: {formatDate(created)}
                    </p>

            </div>
        </>
    )
}

export default CommitDetails;