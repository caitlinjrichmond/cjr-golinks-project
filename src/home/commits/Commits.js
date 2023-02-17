import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import CommitsList from "./CommitsList";

// WHEN YOU GO TO DO THE INDIVUDAL LIST YOU MUST HARDCODE THE URL TO DO THE GET REQUST FROM,

// ie: 
// let url = `https://api.github.com/repos/Netflix/${repo.name}/commits`
// or splice the full url and take out the last 6 char --> seee if you get the correct string after
// repo.commit_url.substring(0, repo.commit_url.length - 6)

function Commits({repo}) {
    const [commits, setCommits] = useState([]);
    const [commitError, setCommitError] = useState(null)
    const [loading, setLoading] = useState(false)
    const url = `https://api.github.com/repos/Netflix/${repo.name}/commits`

    console.log(repo.name)
   useEffect(() => {
       setCommits([]);
       setLoading(false);
       const abortController = new AbortController();

       async function loadCommits() {

        try {
            const response = await axios.get(url);
            setCommits(response.data);
            setLoading(true)
        } catch (error) {
            if (error.name === "AbortError") {
                console.log("Aborted")
            } else {
                throw error;
            }
        }
       }

       loadCommits();

       return () => {
           console.log("clean up");
           abortController.abort()
       }
   }, [])
    
   console.log(commits)

   function checking() {
       return loading && commits.length != 0
   }

    return(
        <div>
       { checking() ? <CommitsList commits={commits} /> : <p>Loading...</p>}
        </div>
    )
}

export default Commits