import Hero from "./Hero";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movie/${movie.id}`;
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img
          src={posterUrl}
          className="card-img-top-custom"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title card-original-title">
            {movie.original_title}
          </h5>
          <p className="card-text card-overview">{movie.overview}</p>
          <Link
            to={detailUrl}
            className="btn btn-primary">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  const resultsHtml = searchResults.map((obj, i) => {
    return (
      <MovieCard
        movie={obj}
        key={i}
      />
    );
  });

  function renderResults() {
    if (searchResults.at(0) !== undefined) {
      return (
        <div>
          <Hero text={title} />
          {resultsHtml && (
            <div className="container">
              <div className="row">{resultsHtml}</div>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div>
          <Hero text="No results" />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 my-5">
                <p className="lead">
                  I'm sorry, but we cannot find any results for {keyword}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return renderResults();
};

export default SearchView;
