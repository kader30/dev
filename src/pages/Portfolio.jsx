import PortfolioCard from "../Assets/Components/PortfolioCard";

// Images locales
import banner from "../Assets/Images/banner.jpg"
import freshFood from "../Assets/Images/portfolio/fresh-food.jpg";
import akira from "../Assets/Images/portfolio/restaurant-japonais.jpg";
import bienEtre from "../Assets/Images/portfolio/espace-bien-etre.jpg";
import seo from "../Assets/Images/portfolio/seo.jpg";
import maquette from "../Assets/Images/portfolio/screens.jpg";
import api from "../Assets/Images/portfolio/coder.jpg";

export default function Portfolio() {
  const projects = [
    {
      image: freshFood,
      title: "Fresh Food",
      description: "Site de vente de produits frais en ligne",
      footer: "Site réalisé avec PHP et MySQL",
    },
    {
      image: akira,
      title: "Restaurant Akira",
      description: "Site de vente de produits frais en ligne",
      footer: "Site réalisé avec WordPress",
    },
    {
      image: bienEtre,
      title: "Espace bien-être",
      description: "Site de vente de produits frais en ligne",
      footer: "Site réalisé avec Laravel",
    },
    {
      image: seo,
      title: "SEO",
      description: "Amélioration du référencement d’un site e-commerce",
      footer: "Utilisation des outils SEO",
    },
    {
      image: api,
      title: "Création d'une API",
      description: "Création d’une API REST publique",
      footer: "PHP - Symfony",
    },
    {
      image: maquette,
      title: "Maquette d'un site web",
      description: "Création du prototype d’un site",
      footer: "Réalisé avec Figma",
    },
  ];

  return (
    <>
      {/* Hero */}
      <header className=""><img src={banner} className="w-100" alt="banner" srcset="" /></header>

      <main className="container my-5">
        {/* Title */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Portfolio</h1>
          <p>Voici quelques-unes de mes réalisations.</p>
          <div className="title-underline mx-auto"></div>
        </div>

        {/* Grid */}
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <PortfolioCard
                image={project.image}
                title={project.title}
                description={project.description}
                footer={project.footer}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
