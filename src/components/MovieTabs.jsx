import React from "react";

const MovieTabs = (props) => {
  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={`nav-link ${
            props.sort_by === "popularity.desc" ? "active" : ""
          }`}
        >
          Popularity desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={`nav-link ${
            props.sort_by === "revenue.desc" ? "active" : ""
          }`}
        >
          Revenue desc
        </div>
      </li>
      <li className="nav-item">
        <div
          cclassName={`nav-link ${
            props.sort_by === "vote_average.desc" ? "active" : ""
          }`}
        >
          Vote average desc
        </div>
      </li>
    </ul>
  );
};

export default MovieTabs;
