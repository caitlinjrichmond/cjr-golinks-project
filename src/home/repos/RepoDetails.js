import React from "react";

function RepoDetails({ repo }) {

    return (
        <>
            <div className="card-body">
                <h5 className="card-title">  Repo Name: {repo.name}</h5>
                <p className="card-text">        <br />
                    Language: {repo.language}
                    <br />
                    Description: {repo.description}
                    <br />
                    Star Count: {repo.stargazers_count}
                    <br />
                    Fork Count: {repo.forks_count}
                    <br />
                    Date Created: {repo.created_at}</p>

            </div>
        </>
    )
}

export default RepoDetails