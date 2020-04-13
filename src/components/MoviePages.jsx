import React from "react";

class MoviePages extends React.Component {
  render() {
    const { page, total_pages } = this.props;
    console.log("MoviePages pages data", page, total_pages);
    return (
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-success">
          Prev Page
        </button>
        <p className="nav-item">
          Page {page} of {total_pages}
        </p>
        <button type="button" className="btn btn-success">
          Next page
        </button>
      </div>
    );
  }
}

export default MoviePages;
