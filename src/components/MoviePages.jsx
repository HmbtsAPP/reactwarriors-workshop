import React from "react";

class MoviePages extends React.Component {
    
    // shouldComponentUpdate(nextProps, nextState) {
    //   if (nextProps.page !== this.props.page) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }

  render() {
    const { page, total_pages, updatePage } = this.props;
    console.log("MoviePages pages data", page, total_pages);

    const handleClick = (value_page) => () => {
      if (value_page <= total_pages && value_page >= 1 && value_page !== page) {
        updatePage(value_page);
        console.log("update Page", value_page);
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
