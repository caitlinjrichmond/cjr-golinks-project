import React from "react";
import "./Main.css"

function SearchBar({handleChange, handleSubmit, orgName}) {

//need to add handle submit
    return (
        <div id="search-bar">
        <form onSubmit={handleSubmit}>
          <label htmlFor="orgName">
            <span>Search for An Org's Repos:</span>
            <input
              id="orgName"
              type="text"
              class="form-control"
              name="orgName"
              onChange={handleChange}
              value={orgName}
            />
          </label>{" "}
          <button
            type="submit"
            class="btn"
          >
            <span>Find</span>
          </button>
        </form>
      </div>
    )
}

export default SearchBar