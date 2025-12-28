import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light static-top  text-uppercase" id="mainNav">
            <div className="container-fluid mx-3">
                <NavLink to="/" className="navbar-brand fw-bold text-light text-decoration-none px-0 px-lg-1 p-1 rounded">John Doe</NavLink>
                <button className="navbar-toggler border-secondary border-2 rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
                    <ul className="navbar-nav text-light ms-auto">
                        <li className="nav-item text-light mx-0 mx-lg-1"> <NavLink to="/" className="nav-link text-light py-1 px-0 px-lg-1 rounded">Home</NavLink></li>
                        <li className="nav-item text-light mx-0 mx-lg-1"> <NavLink to="/Services" className="nav-link text-light py-1 px-0 px-lg-1 rounded">Services</NavLink></li>
                        <li className="nav-item text-light mx-0 mx-lg-1"> <NavLink to="/Contact" className="nav-link text-light py-1 px-0 px-lg-1 rounded">Contact</NavLink></li>
                        <li className="nav-item text-light mx-0 mx-lg-1"> <NavLink to="/Portfolio" className="nav-link text-light py-1 px-0 px-lg-1 rounded">Portfolio</NavLink></li>
                        <li className="nav-item text-light mx-0 mx-lg-1"> <NavLink to="/MentionsLegales" className="nav-link text-light py-1 px-0 px-lg-1 rounded">Mentions legales</NavLink></li>
                    </ul>
                </div>
            </div>



        </nav>




    );
}