export default function MentionsLegales() {
    return (
        <main className="container my-5">
            {/* Page title */}
            <div className="text-center mb-5">
                <h1 className="fw-bold">Mentions légales</h1>
                <div className="title-underline mx-auto"></div>
            </div>

            {/* Accordion */}
            <div className="accordion" id="legalAccordion">
                {/* Éditeur */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#editor"
                        >
                            Éditeur du site
                        </button>
                    </h2>
                    <div
                        id="editor"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#legalAccordion"
                    >
                        <div className="accordion-body text-right">
                            <h4>John Doe</h4>
                            <ul className="list-unstyled mt-3">
                                <li><i className="bi bi-map"></i> 40 rue Laure Diebold</li>
                                <li><i className="bi bi-geo-alt"></i> 69009 Lyon, France</li>
                                <li><i className="bi bi-phone"></i> 10 20 30 40 50</li>
                                <li><i className="bi bi-envelope-at"></i> john.doe@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Hébergeur */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#host"
                        >
                            Hébergeur
                        </button>
                    </h2>
                    <div
                        id="host"
                        className="accordion-collapse collapse"
                        data-bs-parent="#legalAccordion"
                    >
                        <div className="accordion-body">
                            <h4>alwaysdata</h4>
                            <p>
                                91 Rue du Faubourg Saint-Honoré, 75008 Paris
                            </p>
                            <a href="http://www.alwaysdata.com" target="_blank" rel="noopener noreferrer " className="fs-5"><i className="bi bi-globe text-dark me-2"></i>www.alwaysdata.com</a>
                        </div>
                    </div>
                </div>

                {/* Crédits */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#credits"
                        >
                            Crédits
                        </button>
                    </h2>
                    <div
                        id="credits"
                        className="accordion-collapse collapse"
                        data-bs-parent="#legalAccordion"
                    >
                        <div className="accordion-body">
                            <p>
                                Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/"> Centre Européen de formation </a>.
                            </p>
                            <p>
                                Les images utilisées sur ce site sont libres de droits et ont été obtenus sur le site <a href="http://https://pixabay.com/" target="_blank" rel="noopener noreferrer">Pixabay</a>.
                            </p>
                            <p>La favicon de ce site a été fournie par <a href="http://" target="_blank" rel="noopener noreferrer">John doe Icons erstellt von
                                freepik-Flaticon</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
