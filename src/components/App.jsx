import React from "react";
// import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";
import { API_URL, API_KEY_3 } from "../utils/api";
import MovieTabs from "./MovieTabs";
import MoviePages from "./MoviePages";

// UI = fn(state, props)

// App = new React.Component()

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc",
      page: 1,
      total_pages: 0,
    };

    console.log("constructor");
  }

  componentDidMount() {
    console.log("didMount");
    this.getMovies();
    console.log("after fetch");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("didUpdate");
    console.log("prev", prevProps, prevState);
    console.log("this", this.props, this.state);
    if (prevState.sort_by !== this.state.sort_by) {
      console.log("call api update sort_by");
      this.setState({
        page: 1,
      });
      this.getMovies();
    } else {
      if (prevState.page !== this.state.page) {
        console.log("call api update page");
        this.getMovies();
      }
    }
  }

  getMovies = () => {
    console.log("fetch page", this.state.page);
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=en-US&sort_by=${this.state.sort_by}&include_adult=false&include_video=false&page=${this.state.page}`
    )
      .then((response) => {
        console.log("then", this);
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        this.setState({
          movies: data.results,
          total_pages: data.total_pages,
        });
      });
  };

  deleteMovie = (movie) => {
    console.log(movie.id);
    const updateMovies = this.state.movies.filter(
      (item) => item.id !== movie.id
    );
    console.log(updateMovies);

    // this.state.movies = updateMovies;
    this.setState({
      movies: updateMovies,
    });
  };

  addMovieToWillWatch = (movie) => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    updateMoviesWillWatch.push(movie);

    this.setState({
      moviesWillWatch: updateMoviesWillWatch,
    });
  };

  deleteMovieFromWillWatch = (movie) => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(
      (item) => item.id !== movie.id
    );

    this.setState({
      moviesWillWatch: updateMoviesWillWatch,
    });
  };

  updateSortBy = (value) => {
    this.setState({
      sort_by: value,
    });
  };

  updatePage = (value_page) => {
    this.setState({
      page: value_page,
    });
  };

  render() {
    console.log("render", this.state.sort_by);
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-9">
            <div className="mb-4">
              <MoviePages
                page={this.state.page}
                total_pages={this.state.total_pages}
                updatePage={this.updatePage}
              />
            </div>
            <div className="mb-4">
              <MovieTabs
                sort_by={this.state.sort_by}
                updateSortBy={this.updateSortBy}
              />
            </div>
            <div className="row">
              {this.state.movies.map((movie) => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      data={movie}
                      deleteMovie={this.deleteMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      deleteMovieFromWillWatch={this.deleteMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <h4>Will Watch: {this.state.moviesWillWatch.length} movies</h4>
            <ul className="list-group">
              {this.state.moviesWillWatch.map((movie) => (
                <li key={movie.id} className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <p>{movie.title}</p>
                    <p>{movie.vote_average}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-9">
            <div className="mb-4">
              <MoviePages
                page={this.state.page}
                total_pages={this.state.total_pages}
                updatePage={this.updatePage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
