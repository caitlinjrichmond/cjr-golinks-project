import React, { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'
import ReposListed from "./ReposListed"

function AllRepos() {
    const [repos, setRepos] = useState([])
    const [repoError, setRepoError] = useState(null)
    const [loading, setLoading] = useState(false)
    const url = "https://api.github.com/orgs/Netflix/repos"

    useEffect(() => {
        setRepos([]);
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
                    throw error;
                }
            }
        }

        loadRepos();

        return () => {
            console.log("clean up");
            abortController.abort()
        }
    }, [])

    function checking() {
        return loading && repos.length != 0;
    }

    return (

        <div>
            {checking() ? <ReposListed repos={repos} /> : <p>Loading...</p>}
        </div>

    )
}

export default AllRepos