import React from "react";

function Search(props) {
    return (
        <div>
            <input type="text"
                name="employeeSearched"
                id="employeeSeached"
                onChange={props.handleInputChange}
                value={props.search} />
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                Search
            </button>
        </div>
    )
};
export default Search;