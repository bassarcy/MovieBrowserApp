import Hero from "./Hero";

const AboutView = () => {
  return (
    <div>
      <Hero text="About Us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              About Us Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Itaque numquam rerum maiores? Perferendis ad voluptatum quaerat,
              impedit blanditiis porro nam magni quis maxime alias repellendus,
              quisquam nisi assumenda. Quaerat, error?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
