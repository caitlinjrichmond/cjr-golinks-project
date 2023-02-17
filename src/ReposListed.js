import React from "react";
import IndividualRepo from "./IndividualRepo";


function ReposListed({repos}) {
    
    let sortedRepos = repos.sort((function (a,b) {
        let keyA = a.stargazers_count
        let keyB = b.stargazers_count

        return keyB - keyA
    }))

    return(
        <div>
        {" "}
        {sortedRepos.map((repo) => 
            <li key = {repo.id} style = {{ listStyleType: "none"}}>
                <IndividualRepo repo = {repo} />
            </li>
        )}
    </div>
    )
}

export default ReposListed