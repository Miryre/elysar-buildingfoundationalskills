import heroImg from "../../img/Portfolio-Heroaf.png";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="container-fluid py-5">
        <h1
          className="display-3 fw-bold text-center text-white"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
        >
          Welcome to My Page
        </h1>
      </div>

      <div className="container my-5">
        <h1
          className="p-1 text-center text-white"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
        >
          Featured Projects
        </h1>
        <div className="row g-3">
          {/*Card One*/}
          <div className="col-md-6">
            <div className="card">
              <img
                src="https://picsum.photos/seed/picsum/800/500"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
              </div>
            </div>
          </div>
          {/*Card Ending*/}
          {/*Card Two*/}
          <div className="col-md-6">
            <div className="card">
              <img
                src="https://picsum.photos/seed/picsum/800/500"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
              </div>
            </div>
          </div>
          {/*Card Ending*/}
        </div>
      </div>
    </div>
  );
};

export default Hero;
