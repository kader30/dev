import { NavLink } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-4 px-5">
            <div className="container">
                <div className="row">

                    <address className="col-md-4">
                        <p className="fs-4 fw-bold">John Doe</p>
                        <p>
                            40 rue Laure Diebold<br />
                            69009 Lyon, France<br />
                            10 20 30 40 50<br />
                            john.doe@gmail.com
                        </p>
                        <a href="http://github.com" target="_blank" rel="nofollow">  <i className="bi bi-github mx-2 fs-3 text-secondary "></i></a>
                        <a href="http://twitter.com" target="_blank" rel="nofollow"><i className="bi bi-twitter  mx-2 fs-3 text-secondary"></i></a>
                        <a href="http://https://www.linkedin.com/" target="_blank" rel="nofollow"><i className="bi bi-linkedin mx-2 fs-3 text-secondary"></i></a>
                    </address>

                    <div className="col-md-4">
                        <p className="fs-4 fw-bold">Liens utiles</p>
                        <ul className="list-unstyled">
                            <li><NavLink to={"/"}  className="text-light text-decoration-none lien ">Accueil</NavLink></li>
                            <li><NavLink to={"/Services"}  className="text-light text-decoration-none lien ">Services</NavLink></li>
                            <li><NavLink to={"/Portfolio"}  className="text-light text-decoration-none lien">Portfolio</NavLink></li>
                            <li><NavLink to={"/Contact"}  className="text-light text-decoration-none lien">Me contacter</NavLink></li>
                            <li><NavLink to={"/MentionsLegales"}  className="text-light text-decoration-none lien">Mentions légales</NavLink></li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <p className="fs-4 fw-bold">Mes dernières réalisations</p>
                        <ul className="list-unstyled">
                            <li><NavLink to={"/Portfolio"}  className="text-light text-decoration-none lien">Fresh Food</NavLink></li>
                            <li><NavLink to={"/Portfolio"}  className="text-light text-decoration-none lien">Restaurant Akira</NavLink></li>
                            <li><NavLink to={"/Portfolio"}  className="text-light text-decoration-none lien">Espace bien-être</NavLink></li>
                            <li><NavLink to={"/Portfolio"}  className="text-light text-decoration-none lien">SEO</NavLink></li>
                            <li><NavLink to={"/Portfolio"}  className="text-light text-decoration-none lien">Création d'une API</NavLink></li>
                            <li><NavLink to={"/Portfolio"}  className="text-light text-decoration-none lien">Maquette d'un site</NavLink></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
}