import React from "react";

const MovieTabs = (props) => {
  const { sort_by, updateSortBy } = props;
  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={`nav-link ${
            sort_by === "popularity.desc" ? "active" : ""
          }`}
        >
          Popularity desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={`nav-link ${sort_by === "revenue.desc" ? "active" : ""}`}
        >
          Revenue desc
        </div>
      </li>
      <li className="nav-item">
        <div
          cclassName={`nav-link ${
            sort_by === "vote_average.desc" ? "active" : ""
          }`}
        >
          Vote average desc
        </div>
      </li>
    </ul>
  );
};

export default MovieTabs;
