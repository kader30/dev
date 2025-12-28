export default function Contact() {
  return (
    <main className="container my-5">
      {/* Title */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contact</h1>
        <p>
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <div className="title-underline mx-auto"></div>
      </div>

      {/* Card */}
      <div className="card shadow p-4">
        <div className="row">
          {/* Form */}
          <div className="col-md-6">
            <h4 className="section-title">Formulaire de contact</h4>

            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Votre nom"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Votre adresse email"
                />
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Votre numéro de téléphone"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Sujet"
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="6"
                  placeholder="Votre message"
                ></textarea>
              </div>
               <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary mx-auto">
                Envoyer
              </button>
              </div>
            </form>
          </div>

          {/* Contact details */}
          <div className="col-md-6">
            <h4 className="section-title">Mes coordonnées</h4>

            <p className="fw-bold mb-2">John Doe</p>
            <ul className="list-unstyled">
              <li><i className="bi bi-map me-2"></i>40 rue Laure Diebold</li>
              <li><i className="bi bi-geo-alt me-2"></i>69009 Lyon, France</li>
              <li><i className="bi bi-telephone me-2"></i>10 20 30 40 50</li>
              <li><i className="bi bi-envelope me-2"></i>john.doe@gmail.com</li>
            </ul>

            {/* Google Map */}
            <div className="map-container mt-3">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=40%20rue%20Laure%20Diebold%2069009%20Lyon&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
