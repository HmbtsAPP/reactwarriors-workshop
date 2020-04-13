import React from "react";

class MoviePages extends React.Component {
  render() {
    const { page, total_pages, updatePage } = this.props;
    console.log("MoviePages pages data", page, total_pages);

    const handleClick = (value) => () => {
      if (value <= total_pages && value >= 1 && value !== page) {
        updatePage(value);
        console.log("update Page", value);
      }
    };

    return (
      <div className="d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleClick(page - 1)}
        >
          Prev Page
        </button>
        <p className="nav-item">
          Page {page} of {total_pages}
        </p>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleClick(page + 1)}
        >
          Next page
        </button>
      </div>
    );
  }
}

export default MoviePages;
