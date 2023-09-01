import { Link } from 'react-router-dom'

function PesananPage() {
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
        <div>
            <header className="mb-5">
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark ">
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
        </div>

    );
}
function Body() {
    return (
        <div className="d-flex flex-column h-100 min-vh-100 w-full bg-dark" >
            <main id="main" className="flex-shrink-0 " role={"main"} >
                <div className="container" style={{ marginTop: "150px" }}>
                    <div className="row justify-content-center">
                        <div className="col-12 mb-5 col-lg-6">
                            <div className="card mb-5 bg-black-pip" style={{ backgroundColor: "#212529" }}>
                                <div className="card-header title-themes text-center fw-semibold" style={{ backgroundColor: "#be0002" }}>
                                    CEK PESANAN ANDA DISINI
                                </div>
                                <div className="card-body">
                                    <form method="post" action="/check-order">
                                        <input type="hidden" name="_csrf" value="4JXcr2wj1SxJSHkx0N6UB19KlHc5edFf3fQux3MbWpTV2pn9K0rtYCEtEQapltdiLRPsJHE4vW7ulm2sAmgb4w==" />
                                        <input className="form-control mb-2" type="text" name="code_invoice" placeholder="Masukan Kode Invoice" required="" />
                                        <div className="d-grid gap-2">
                                            <div className="g-recaptcha" data-sitekey="6Lfxx60fAAAAAAmIELZVvT3XZWoL5qiege9um8u3"></div>
                                            <button className="btn btn-themes my-3" type="submit" style={{ backgroundColor: "#be0002" }}><i className="fa-solid fa-search"></i> CEK INVOICE</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer id="footer" className="mt-auto" style={{ backgroundColor: "#000000" }}>
                <div className="container-fluid bg-secondary-themes border-top-uzl">
                    <div className="row gap-1">
                        <div className="col">
                            <div className="container">
                                <div className="row py-3">
                                    <div className="col-3 col-lg-1">
                                        <img src="https://r7store.id/themes/images/logo_bottom.png" alt="logo" width="90" height="auto" className="float-start me-2" />
                                    </div>
                                    <div className="col-9 col-lg-7">
                                        <h3 className="h6">WEBSITE PEMBELIAN TOP UP DAN VOUCHER GAME ONLINE AMAN, TEPERCAYA DAN TERJANGKAU</h3>
                                        <p>Pembayaran lengkap, instan proses legal dan terpercaya bagi seluruh sobat R7STORE di Indonesia. Dan juga tersedia berbagai macam jenis game populer seperti Ragnarok, Ni No Kumi, Mobile Legend, Genshin Impact, Valorant, dan masih banyak yang lainnya.</p>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <h4 className="h6 border-left-themes">Follow Us</h4>
                                        <a href="https://www.facebook.com/#" className="btn btn-sm btn-outline-themes" target="_blank" role="button">
                                            <img src="https://r7store.id/themes/images/fb.png" alt="facebook" width="20" height="auto" className="d-inline-block align-text-top" />
                                        </a>
                                        <a href="https://www.instagram.com/r7gamingstore.id/" className="btn btn-sm btn-outline-themes" target="_blank" role="button">
                                            <img src="https://r7store.id/themes/images/ig.png" alt="instagram" width="20" height="auto" className="d-inline-block align-text-top" />
                                        </a>
                                        <a href="https://www.youtube.com/c/R7Tatsumaki" className="btn btn-sm btn-outline-themes" target="_blank" role="button">
                                            <img src="https://r7store.id/themes/images/yt.png" alt="youtube" width="20" height="auto" className="d-inline-block align-text-top" />
                                        </a>
                                        <h4 className="h6 border-left-themes mt-3">Contact Us</h4>
                                        <a href="mailto:r7store.id@gmail.com" className="btn btn-sm btn-outline-themes" target="_blank" role="button">
                                            <img src="https://r7store.id/themes/images/gmail.png" alt="email" width="20" height="auto" className="d-inline-block align-text-top" />
                                        </a>
                                        <a href="https://api.whatsapp.com/send/?phone=6282114617846&amp;text=Hallo%2C+Mau+Order&amp;type=phone_number&amp;app_absent=0" className="btn btn-sm btn-outline-themes" target="_blank" role="button">
                                            <img src="https://r7store.id/themes/images/wa.png" alt="whatsapp" width="20" height="auto" className="d-inline-block align-text-top" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row py-2">
                        <div className="col-md-12 text-center fw-semibold">Copyright © R7STORE 2023. All rights reserved.</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default PesananPage;
