import React from "react";
import RepoDisplay from "./RepoDisplay";
import "./Repos.css"


// This component styles the unordered list.
// Each item in the unordered list will be a repo for the input company (or Netflix)

function ReposListed({ background, darkMode, repos, orgName }) {
   
    // function sorts the repos in desdending order by starcount
    let sortedRepos = repos.sort((function (a, b) {
        let keyA = a.stargazers_count;
        let keyB = b.stargazers_count;

        return keyB - keyA;
    }));
    
    //function renders text color to match dark/light mode styling
    function textColor() {
        if (darkMode) {
            return "#00D0FF";
        } else {
            return "#212529";
        };
    };

    return (
        <div>
            <h6 className="repo-showing pb-1" style={{ color: textColor() }}>Showing {repos.length} Repos for "{orgName}"</h6>
            <div className="d-flex">
                <ul style={{ backgroundColor: background }}>
                    {sortedRepos.map((repo) =>
                        <li key={repo.id} style={{ listStyleType: "none", backgroundColor: background }}>
                            <RepoDisplay darkMode={darkMode} repo={repo} orgName={orgName} />
                            <br />
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ReposListed;