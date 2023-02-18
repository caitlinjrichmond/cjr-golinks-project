import React, { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'
import ReposListed from "./ReposListed"
import LoadingHandler from "../LoadingHandler"
import "./Repos.css"

function AllRepos({orgName}) {
    const [repos, setRepos] = useState([])
    const [repoError, setRepoError] = useState(null)
    const [loading, setLoading] = useState(false)
    const url = `https://api.github.com/orgs/${orgName}/repos`

    useEffect(() => {
        setRepos([]);
        setRepoError(null)
        setLoading(false);
        const abortController = new AbortController();

        async function loadRepos() {

            try {
                const response = await axios.get(url);
                setRepos(response.data)
                setLoading(true)
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Aborted")
                } else {  
                    setRepoError(error.message)
                    throw error
                }
              
            }
        }

        loadRepos();

        return () => {
            console.log("clean up");
            abortController.abort()
        }
    }, [orgName])

    function checking() {
        return loading && repos.length != 0;
    }

    
    return (

        <div>
            {checking() ? <ReposListed repos={repos} orgName = {orgName} /> : <LoadingHandler repoError={repoError} orgName={orgName} />}
        </div>

    )
}

export default AllRepos