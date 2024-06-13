import img1 from "../assets/images/milan-malkomes-a40akJxBhT8-unsplash 2.jpg"
import img2 from "../assets/images/george-prentzas-SRFG7iwktDk-unsplash.jpg"
import img3 from "../assets/images/milosz-klinowski-BW0d0IllW8E-unsplash.jpg"


function Carousel() {
  return (
    <div className="animate__animated animate__fadeInDown animate__slow">
      <div id="carouselExampleAutoplaying" className="carousel slide colo" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          {/* carousel slid no.1 */}
          <div className="carousel-item active">
            <div className="bgimg1">
              <img width={900} height={895} src={img1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-caption h-50">
                  <h1>Wellcome to our website</h1>
                  <p>Ride the Wave of Safety: Explore Our Security Solutions</p>
              </div>
          </div>
          {/* carousel slid no.2 */}
          <div className="carousel-item">
            <div className="bgimg1">
              <img width={900} height={895} src={img2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-caption d-none d-md-block h-50">
                <h1>Our Job is</h1>
                <p>Fortifying Homes and Businesses: Safeguarding Your Spaces, Shielding Your Success</p>
            </div>
          </div>
          {/* carousel slid no.3 */}
          <div className="carousel-item">
            <div className="bgimg1">
              <img width={900} height={895} src={img3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-caption d-none d-md-block h-50">
                <h1>We her for your Home and Company</h1>
                <p>Fortify Your Sanctuary: Strengthening Homes and Businesses Against Digital Threats</p>
            </div>
          </div>
          {/* carousel slid buttons */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
