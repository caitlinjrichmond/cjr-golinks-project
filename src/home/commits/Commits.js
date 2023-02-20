import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import CommitsList from "./CommitsList";
import Handlers from "../response_handlers/Handlers";
import "./Commits.css"

// Commits renders the list of commits associated with the repo org
// renders the list each time the orgName is changed and a new list of repos is rendered

function Commits({ handleClick, repo, orgName }) {
    const [commits, setCommits] = useState([]);
    const [commitError, setCommitError] = useState(null);
    const [loading, setLoading] = useState(false);
    const url = `https://api.github.com/repos/${orgName}/${repo.name}/commits`;

    // function sends GET request to API to render list of commits
    useEffect(() => {
        setCommits([]);
        setLoading(false);
        setCommitError(null);
        const abortController = new AbortController();

        async function loadCommits() {
            try {
                const response = await axios.get(url);
                setCommits(response.data);
                setLoading(true);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Aborted");
                } else {
                    setCommitError(error);
                    throw error;
                };
            };
        };

        loadCommits();

        return () => {
            console.log("clean up");
            abortController.abort();
        }
    }, [orgName]);


    // function ensures there are commits and that they are fully loaded before render
    function checking() {
        return loading && commits.length != 0;
    };

    return (
        <div>
            {checking() ?
                <CommitsList commits={commits} handleClick={handleClick} /> :
                <Handlers commitError={commitError} orgName={orgName} />}
        </div>
    );
};

export default Commits;