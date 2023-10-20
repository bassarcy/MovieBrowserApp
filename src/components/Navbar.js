import { useNavigate, Link } from "react-router-dom";

function Navbar({ searchText, setSearchText }) {
  const navigate = useNavigate();

  const updateSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const useSearchButton = (e) => {
    e.preventDefault();
    let newText = document.getElementById("search-bar").value;
    navigate("/search");
    setSearchText(newText);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/">
            Movie Browser
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link disabled"
                  href="gotosomewhere"
                  aria-disabled="true">
                  Coming Soon
                </Link>
              </li>
            </ul>
            <form
              className="d-flex"
              role="search">
              <input
                className="form-control me-2"
                id="search-bar"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchText}
                onChange={updateSearchText}
              />
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={useSearchButton}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
