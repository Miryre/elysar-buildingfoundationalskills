const Hero = () => {
  return (
    <div className="p-5 mb-4 bg-dark text-light vh-100">
      <div className="container-fluid py-5">
        <h1 className=" display-3 fw-bold text-center">Welcome to My Page</h1>
      </div>

      <div className="container my-5">
        <div className="row g-2">
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
