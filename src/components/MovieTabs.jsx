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
        <div className="nav-link">Revenue desc</div>
      </li>
      <li className="nav-item">
        <div className="nav-link">Vote average desc</div>
      </li>
    </ul>
  );
};

export default MovieTabs;
