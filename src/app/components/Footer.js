export default function Footer(){
    return(
        <div>
            <footer className="navbar fixed-bottom navbar-light">
                <div className="container-fluid" id="footerCSS">
                    <a className="navbar-brand" id="bizTitle" href={`/`}>Girard Brewery by Paditim Tech LLC</a>
                    <div className="nav justify-content-center">&copy; 2025</div>
                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item refContr" id="reference">
                                <a className="nav-link" href={`/RefAndComp`}>References & Contributions</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <a href="https://www.linkedin.com/company/paditim" target="_blank" className="me-3 text-reset">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/paditim" target="_blank" className="me-3 text-reset">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}