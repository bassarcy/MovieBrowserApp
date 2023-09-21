import Hero from './Hero'

const HomeView = () => {
  return (
    <div>
      <Hero text="Welcome to the Home Page" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illum fugit minima explicabo dolorem! Cupiditate architecto illo expedita, quis ea eius sunt non distinctio quasi eligendi dolorem, ut excepturi rerum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeView;