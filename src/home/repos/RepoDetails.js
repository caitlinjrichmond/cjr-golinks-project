import React from "react";

function RepoDetails({ handleClick, repo }) {

    function formatDate(date) {
        return new Date(date).toLocaleDateString()
    }

    function formatDesc(desc) {
        let endingPunc = [".", "!", "?"]
        let lastChar = desc[desc.length - 1]
        if (!endingPunc.includes(lastChar)) {
            desc = desc + "."
        }

        return desc
    }


    function formatName(repoName) {
        let firstLetter = repoName.substring(0, 1)

        return firstLetter.toUpperCase() + repoName.substring(1, repoName.length)
    }

    return (

        <div className="card-body">
            <div className="card-text">
                <div className="d-flex flex-row justify-content-between">
                    <h5>{formatName(repo.name)}</h5>
                    <p>Created: {formatDate(repo.created_at)}</p>
                </div>
                <div className="d-flex flex-row">
                    <p className="counts stars" style={{ color: "#000", backgroundColor: "#FFBE0B" }}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#000" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                        {" "}
                        {repo.stargazers_count}
                    </p>
                    {" "}
                    <p className="counts" style={{ color: "#000", backgroundColor: "#00D0FF" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#000" class="bi bi-bezier2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h1A1.5 1.5 0 0 1 5 2.5h4.134a1 1 0 1 1 0 1h-2.01c.18.18.34.381.484.605.638.992.892 2.354.892 3.895 0 1.993.257 3.092.713 3.7.356.476.895.721 1.787.784A1.5 1.5 0 0 1 12.5 11h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5H6.866a1 1 0 1 1 0-1h1.711a2.839 2.839 0 0 1-.165-.2C7.743 11.407 7.5 10.007 7.5 8c0-1.46-.246-2.597-.733-3.355-.39-.605-.952-1-1.767-1.112A1.5 1.5 0 0 1 3.5 5h-1A1.5 1.5 0 0 1 1 3.5v-1zM2.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
                        </svg>
                        {" "}
                        {repo.forks_count}
                    </p>
                    {" "}
                    <p className="lang" style={{ backgroundColor: "#C792E4", color: "#000" }}>{repo.language ? repo.language : null}</p>
                    {" "}
                </div>
                <div className="d-flex flex-row">
                    <p>{repo.description ? formatDesc(repo.description) : "See commits for details."}</p>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <p onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg> {" "}
                        See Commits
                    </p>
                </div>
            </div>
        </div>

    )
}

export default RepoDetails

{/* <div className="card-header" id="repo-title" style={{backgroundColor: "#ADB5BD"}}>
<div className="d-flex justify-content-between">
    <h5 className="repo-name" style={{color: "#212529"}}>{formatName(repo.name)}</h5>
    <div className="star-fork">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#212529" class="bi bi-star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
        </svg>{" "} <span style={{color: "#212529"}}>Stars</span> {" "}
         <span id="counts" style={{color: "#E9ECEF", backgroundColor: "#495057"}}>{repo.stargazers_count}</span> 
         <br /> 
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#212529" class="bi bi-bezier2" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h1A1.5 1.5 0 0 1 5 2.5h4.134a1 1 0 1 1 0 1h-2.01c.18.18.34.381.484.605.638.992.892 2.354.892 3.895 0 1.993.257 3.092.713 3.7.356.476.895.721 1.787.784A1.5 1.5 0 0 1 12.5 11h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5H6.866a1 1 0 1 1 0-1h1.711a2.839 2.839 0 0 1-.165-.2C7.743 11.407 7.5 10.007 7.5 8c0-1.46-.246-2.597-.733-3.355-.39-.605-.952-1-1.767-1.112A1.5 1.5 0 0 1 3.5 5h-1A1.5 1.5 0 0 1 1 3.5v-1zM2.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
        </svg>{" "}  <span style={{color: "#212529"}}>Forks</span> 
        {" "} {" "}<span id="counts" style={{color: "#E9ECEF", backgroundColor:"#495057"}}>{repo.forks_count}</span>
    </div>
</div>
</div> */}

// {repo.description? formatDesc(repo.description) : "Click to see commits."}

// <div className="d-flex justify-content-between repo-details">
//    { repo.language ? <span id="language" style={{backgroundColor: langColor(), color: langText()}}> {repo.language} </span> : <span> {" "} </span>}
//     <div>
//         Created: {formatDate(repo.created_at)}
//     </div>
// </div>