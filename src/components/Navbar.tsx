
function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-dark bg-gradient border-bottom border-body sticky-top fixed-top" data-bs-theme="dark">
      <div className="container">
        {/* Nav Logo */}
        <a className="navbar-brand animate__animated animate__fadeInLeft" href="/">
        <strong><span className="text-danger">Berim</span>bolo</strong>
        </a>
        {/* Icon toggler  */}
        <button className="navbar-toggler  animate__animated animate__fadeInRight" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Nav tabs */}
        <div className="collapse navbar-collapse justify-content-end animate__animated animate__fadeInRight" id="navbarSupportedContent">
          <ul className="navbar-nav nav-underline">
            {/* home tab */}
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* Products tab */}
            <li className="nav-item">
              <a className="nav-link" href="#Products">
                Products
              </a>
            </li>
            {/* About us tab */}
            <li className="nav-item">
              <a className="nav-link" href="#About">
                About us
              </a>
            </li>
            {/* FAQs tab */}
            <li className="nav-item">
              <a className="nav-link" href="#FAQs">
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
