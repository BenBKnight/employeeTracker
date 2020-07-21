import React from "react";

function Search(props) {
    return (
        <div>
            <h4>Search for an Employee:</h4>
            <br />
            <input type="text"
                name="employeeSearched"
                id="employeeSeached"
                onChange={props.handleInputChange}
                value={props.search} />
        </div>
    )
};
export default Search;