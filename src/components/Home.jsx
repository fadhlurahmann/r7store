import { Link } from 'react-router-dom'

function HomePage() {
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
                        <Link className="navbar-brand d-none d-lg-inline-block" to="/">
                            <img className="bi me-2 d-inline-block align-text-top" src="https://r7store.id/themes/images/logo.png" alt="LOGO" width="125" height="auto"></img>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-label="toggle navigation">
                            <span className="navbar-toggle-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/pesanan">
                                        <i className="fa-solid fa-search"></i>
                                        Pesanan
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/login">
                                        <i className="fa-solid fa-search"></i>
                                        Login
                                    </Link>
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
        <div className="d-flex flex-column h-100 min-vh-100 w-full text-white bg-dark" style={{ backgroundColor: "#212529" }}>
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
                                                <li className="nav-item me-3">
                                                    <a className="btn btn-outline-themes btn-sm" href="#menu-all">ALL GAME</a>
                                                </li>
                                                <li className="nav-item me-3">
                                                    <a className="btn btn-outline-themes btn-sm" href="#menu-uid">VIA UID</a>
                                                </li>
                                                <li className="nav-item me-3">
                                                    <a className="btn btn-outline-themes btn-sm" href="#menu-login">VIA LOGIN</a>
                                                </li>
                                                <li className="nav-item me-3">
                                                    <a className="btn btn-outline-themes btn-sm" href="#menu-voucher">VOUCHER</a>
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
            <div className="col-sm mt-3 row d-flex justify-content-center" style={{ width: 350, }}>
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
            <div className="container bg-third-themes">
                <div className="row mt-2 pt-2 mb-2 ">
                    <div className="col">
                        <h2 className="title-kategori-themes">POPULAR</h2>
                    </div>
                </div>
                <div className="col-4 col-md-2 " id="splide1-slide01"  >
                    <div className="card equalHeight card-themes-parent"  >
                        <div className="card-body card-themes">
                            <Link className="nav-link" aria-current="page" to="/ml">
                                <img src="https://panel.r7store.id/img/uploads/category/25_10_MLBB-1.webp" width="100%" className="rounded" />
                                <div className="nama-kategori text-small text-center">
                                    MOBILE LEGENDS
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}
export default HomePage;