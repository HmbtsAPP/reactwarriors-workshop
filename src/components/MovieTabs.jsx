import React from "react";

const MovieTabs = (props) => {
  const { sort_by, updateSortBy } = props;
  const handleClick = (value) => {
    return (event) => {
      updateSortBy(value);
    };
  };
  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={`nav-link ${
            sort_by === "popularity.desc" ? "active" : ""
          }`}
          onClick={handleClick("popularity.desc")}
        >
          Popularity desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={`nav-link ${sort_by === "revenue.desc" ? "active" : ""}`}
          onClick={handleClick("revenue.desc")}
        >
          Revenue desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={`nav-link ${
            sort_by === "vote_average.desc" ? "active" : ""
          }`}
          onClick={handleClick("vote_average.desc")}
        >
          Vote average desc
        </div>
      </li>
    </ul>
  );
};

export default MovieTabs;
