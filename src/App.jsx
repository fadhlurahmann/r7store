function App() {
  return (
    <>
      <div className="row mx-1">
        <div className="col p-0">
          <Main />
          <Body />
        </div>
      </div>
    </>
  );
}

function Main() {
  return (
    <header className="mb-5">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow">
        <div className="container">
          <div className="d-flex">
            <span className="w-100 d-lg-none d-block"></span>
            <a className="navbar-brand d-none d-lg-inline-block" href="www.r7store.id">
              <img className="bi me-2 d-inline-block align-text-top" src="https://r7store.id/themes/images/logo.png" alt="LOGO" width="125" height="auto"></img>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expended="false" aria-label="toggle navigation">
              <span className="navbar-toggle-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar">
              +            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/cekpesanan">
                    <i className="fa-solid fa-search"></i>
                    Pesanan
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/Login">
                    <i className="fa-solid fa-search"></i>
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Body() {
  return (
    <div>
      <div className="container" style={{ marginTop: '100px' }}>
        <div className="row d-none d-lg-block">
          <div className="row d-none d-lg-block">
            <div className="col-lg-9 mx-auto">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" role="group" aria-label="1 / 3">
                    <img src="https://panel.r7store.id/img/uploads/slider/5_NEW-BANNER-R7_1.webp" className="d-block w-100" alt="" style={{ borderRadius: '20px' }} />
                  </div>
                  <div className="carousel-item active" role="group" aria-label="2 / 3">
                    <img src="https://panel.r7store.id/img/uploads/slider/5_NEW-BANNER-R7_1.webp" className="d-block w-100" alt="" style={{ borderRadius: '20px' }} />
                  </div>
                  <div className="carousel-item active" role="group" aria-label="3 / 3">
                    <img src="https://panel.r7store.id/img/uploads/slider/5_NEW-BANNER-R7_1.webp" className="d-block w-100" alt="" style={{ borderRadius: '20px' }} />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-top">
        <div className="container-fluid border-bottom border-top mt-1 py-2 bg-danger-themes">
          <div className="row">
            <div className="col">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="d-flex col col-lg-5">
                    <nav id="navbar-menu-index">
                      <ul className="nav nav-pilss nav-fill mobile-version">
                        <li className="nav-item me-3">
                          <a className="btn btn-outline-themes btn-sm" href="#menu-popular">POPULAR</a>
                        </li>
                        <li class="nav-item me-3">
                          <a class="btn btn-outline-themes btn-sm" href="#menu-all">ALL GAME</a>
                        </li>
                        <li class="nav-item me-3">
                          <a class="btn btn-outline-themes btn-sm" href="#menu-uid">VIA UID</a>
                        </li>
                        <li class="nav-item me-3">
                          <a class="btn btn-outline-themes btn-sm" href="#menu-login">VIA LOGIN</a>
                        </li>
                        <li class="nav-item me-3">
                          <a class="btn btn-outline-themes btn-sm" href="#menu-voucher">VOUCHER</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="col-sm mt-3">
      <form action="" method="get">
        <div id="dropsearchdown" className="input-group me-3 search-bar" aria-haspopup="true">
          <input id="searchProds" className="form-control search_input" type="text" name="q" placeholder="Search products..." autoComplete="off" />
          <button style={{ backgroundColor: "#b19973" }} id="btnSearchProds" className="btn btn-primary" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <ul id="dropDownSearchResults" className="dropdown-menu dropdown-menu-dark position-absolute shadow navbar-nav-scroll" aria-labelledby="dropsearchdown"></ul>
      </form>
    </div>

    </div >
  );
}
export default App;
