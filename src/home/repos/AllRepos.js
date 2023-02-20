import React, { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'
import ReposListed from "./ReposListed"
import Handlers from "../response_handlers/Handlers"
import "./Repos.css"

// Component holds all components related to repository lists.

function AllRepos({ orgName, darkMode, background }) {
    const [repos, setRepos] = useState([]);
    const [repoError, setRepoError] = useState(null);
    const [loading, setLoading] = useState(false);
    const url = `https://api.github.com/orgs/${orgName}/repos`;

    // function handles GET request to API to gather repo list data
    // renders a new list each time an input on the search bar changes 
    // if page is refreshed, the default list of Netflix is shown again

    useEffect(() => {
        setRepos([]);
        setRepoError(null);
        setLoading(false);
        const abortController = new AbortController();

        async function loadRepos() {

            try {
                const response = await axios.get(url);
                setRepos(response.data);
                setLoading(true);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Aborted");
                } else {
                    setRepoError(error.message);
                    throw error;
                };
            };
        };

        loadRepos();

        return () => {
            console.log("clean up");
            abortController.abort();
        }
    }, [orgName]);

    //function makes sure data exists & loading of data is complete before full rendering
    function checking() {
        return loading && repos.length != 0;
    };


    return (

        <div style={{ backgroundColor: background }}>
            {checking() ?
                <ReposListed background={background} darkMode={darkMode} repos={repos} orgName={orgName} /> :
                <Handlers background={background} repoError={repoError} orgName={orgName} />}
        </div>

    )
}

export default AllRepos;