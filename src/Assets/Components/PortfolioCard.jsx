export default function PortfolioCard({
    image,
    title,
    description,
    footer
}) {
    return (
        <div className="card h-100 card-work m-1">

            <img srcSet={image} className="card-img-top" alt={title} />

            <div className="card-body text-center">
                <h5 className="fw-bold">{title}</h5>
                <p>{description}</p>
                <button className="btn btn-primary btn-sm">
                    Voir le site
                </button>
            </div>

            <div className="card-footer text-center small text-muted">
                {footer}
            </div>
        </div>

    );
}
