const Services = () => {
  const  MesServices=[
   {
    title:'UX Design',
     description: "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objet connectés, etc) en plaçant l'utilisateur au centre des préocupations L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.",
      icons:"bi bi-brush",
     alt:"john doe"
   },
   {
    title :'Développement web',
     description : "Le développement de site web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)",
      icons : "bi bi-code-slash",
       alt :"Balise Html"

   },
   {
     title:'Réérencement',
      description: "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.",
              icons: "bi bi-search",
               alt :"john doe"
   }
    ]
        
    return(
    
        <main className="">
            <img srcSet={banner} alt=""  className="w-100" />
            <div className=" justify-content-center">
            <h2 className="text-center">Mon offre de services</h2>
            <p className="text-center">Voici les prestations sur laquelle je peut intervenir</p>
            <div className="title-underline mx-auto"></div>
         
           </div>
  <div className="row  row-cols-md-3 g-3 mx-5 my-5 text-center   justify-content-center">
   {MesServices.map((service, index) => (
              <div className="col-md-4 col-lg-4" key={index}>
                <Card
                  icons={service.icons}
                  title={service.title}
                  description={service.description}
                  footer={service.alt}
                />
              </div>
            ))}
  
</div>
        </main>
           
        
    )
}
export default Services;