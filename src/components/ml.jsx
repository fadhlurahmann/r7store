import { Link } from 'react-router-dom'

function MlPage() {
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
                            <i className="w-100 d-lg-none d-block"></i>
                            <Link className="navbar-brand d-none d-lg-inline-block" to="/">
                                <img className="bi me-2 d-inline-block align-text-top" src="https://r7store.id/themes/images/logo.png" alt="LOGO" width="125" height="auto"></img>
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-label="toggle navigation">
                                <i className="navbar-toggle-icon"></i>
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
                        <div className="row g-2 justify-content-center">
                            <div className="col-4 col-lg-4">
                                <img src="https://panel.r7store.id/img/uploads/category/25_10_MLBB-1.webp" className="img-fluid img-thumbnail rounded-3 shadow-sm mb-2" style={{ marginLeft: "-300px", marginTop: "-80px", width: "100px" }} />
                            </div>
                            <div className="col-12 col-lg-8 align-self-end text-center text-md-start">
                                <strong>
                                    <i className="title-item text-white" style={{ marginLeft: "-300px", marginTop: "-50px" }}>MOBILE LEGENDS</i>
                                </strong>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div>
                            <div className="col-8 col-lg-4" style={{ marginLeft: "-50px", marginTop: "-50px" }}>
                                <div className="card shadow-sm ">
                                    <div className="card-body text-small-one rounded-5">

                                        <p>
                                            <i style={{ fontSize: "1rem" }}>Top Up Diamond Mobile Legends Untuk Akunmu Dijamin Paling Murah, Legal dan Cepat Hanya di R7 Gaming Store !</i>
                                        </p>
                                        <p>
                                            <i style={{ fontSize: "1rem" }}></i>
                                            <i style={{ fontSize: "1rem" }}>Cara Order :</i>
                                        </p>
                                        <ol>
                                            <li>Cukup masukan ID &amp; Server akunmu</li>
                                            <li>Pilih nominal yang ingin kamu beli</li>
                                            <li>Lakukan pembayaran melalui BCA, MANDIRI, BNI, Alfamart, OVO, Shopee Pay, DANA, GOPAY, dan Link-Aja</li>
                                            <li>Isi nomor whatsapp kamu dengan benar karna kami akan memberikan notifikasi jika pesanan sudah di proses.</li><li>Selamat ! Diamond/Starlight akan bertambah langsung ke akunmu setelah pembayaran berhasil / mendapatkan notifikasi whatsapp dari kami.</li>
                                        </ol>
                                        <p>PROSES 1 - 5 MENIT
                                            <i style={{ fontSize: "1rem" }}>Jam AKTIF Paket ini :</i>
                                            <i style={{ fontSize: "1rem" }}>Layanan Aktif 24 Jam</i>
                                            <i style={{ fontSize: "1rem" }}>
                                                <i style={{ fontWeight: "bolder" }}>
                                                    <font color="#ff0000">Maksimal 2 Jam Jika Ada Event Top-up Di Mobile Legends.</font>
                                                </i>
                                            </i>
                                        </p>
                                    </div>
                                </div>
                            </div><div className="col-8">
                                <form method="post" id="buyform" autoComplete="off">
                                    <div className="card shadow-sm">
                                        <div className="card-header title-themes text-start fw-semibold">
                                            MASUKAN DATA AKUN
                                        </div>
                                        <div className="card-body text-small-one">
                                            <input type="hidden" name="_csrf" value="6xNmB4qkjaI7P7BaeR1M0oA8bC-eNLhew6_P_SvFiZ7eXCNVzc217lNa2G0AVQ-38mUUfNZ11G_wzYyWWrbI6Q==" />
                                            <div className="form-group row py-1 g-0">
                                                <label htmlFor="put-UserID" className="col-sm-2 col-form-label">UserID</label>
                                                <div className="col-sm-10">
                                                    <input type="number" className="form-control" id="put-UserID" name="put-UserID" required="" />
                                                </div>
                                            </div>
                                            <div className="form-group row py-1 g-0">
                                                <label htmlFor="put-ServerID" className="col-sm-2 col-form-label">ServerID</label>
                                                <div className="col-sm-10">
                                                    <input type="number" className="form-control" id="put-ServerID" name="put-ServerID" required="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
        </div >
            </main >
                </div>
                

    );
}
export default MlPage;