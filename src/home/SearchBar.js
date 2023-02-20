import React from "react";
import "./Main.css"

// Search bar form that allows for a display of a company's repo dependent on input

function SearchBar({ darkMode, handleChange, handleSubmit, data }) {

    // functions handle rendering dependent on "light" or "dark" mode selection
    // specifically changes the submit button and button text 
    function btnColor() {
        if (darkMode) {
            return "#C792E4";
        } else {
            return "#595959";
        };
    };

    function btnText() {
        if (darkMode) {
            return "#212529";
        } else {
            return "#E9ECEF";
        };
    };


    return (
        <div className="input-group mb-3" id="search-bar">
            <form onSubmit={handleSubmit}>
                <label htmlFor="orgName">
                    <input
                        id="orgName"
                        type="search"
                        className="form-control"
                        name="orgName"
                        placeholder="Search Company Repos"
                        onChange={handleChange}
                        value={data}
                        style={{ backgroundImage: "&#xF52A" }}
                        required
                    />
                </label>
                <button
                    type="submit"
                    className="btn btn-dark mb-1"
                    style={{ backgroundColor: btnColor(), height: "40px", marginLeft: "3px" }}
                >
                    <span style={{ color: btnText() }}>Go</span>
                </button>
            </form>
        </div>
    );
};

export default SearchBar;