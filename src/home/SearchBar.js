import React from "react";
import { useState } from "react";

function SearchBar({handleChange, handleSubmit, orgName}) {

//need to add handle submit
    return (
        <>
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
      </>
    )
}

export default SearchBar