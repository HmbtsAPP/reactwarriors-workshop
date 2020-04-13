import React from "react";

class MoviePages extends React.Component {
  render() {
    const { page, total_pages } = this.props;
    console.log("MoviePages pages data", page, total_pages);
    return (
      <div>
        Page {page} of {total_pages}
      </div>
    );
  }
}

export default MoviePages;
