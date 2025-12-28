export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 px-5">
      <div className="container">
        <div className="row">

          <adress className="col-md-4">
            <h5>John Doe</h5>
            <p>
              40 rue Laure Diebold<br />
              69009 Lyon, France<br />
              10 20 30 40 50<br />
              john.doe@gmail.com
            </p>
             <i className="bi bi-github mx-2 fs-3 text-secondary "></i>
                 <i className="bi bi-twitter mx-2 fs-3 text-secondary"></i>
                <i className="bi bi-linkedin mx-2 fs-3 text-secondary"></i>
          </adress>

          <div className="col-md-4">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li>Accueil</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Me contacter</li>
              <li>Mentions légales</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>Fresh Food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien-être</li>
              <li>SEO</li>
              <li>Création d'une API</li>
              <li>Maquette d'un site</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}