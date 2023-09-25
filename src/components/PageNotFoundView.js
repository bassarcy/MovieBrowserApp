import Hero from "./Hero";

const PageNotFoundView = () => {
  return (
    <div>
      <Hero text="Error 404: Page Not Found" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Error 404: It seems the page you are looking for no longer exists
              or is located at a different address.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFoundView;
