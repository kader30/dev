export const Card = (props)=>{
    return (

       
    <div className="card h-100">
      <span className="fs-2 fw-bolder text-primary my-3">  <i className={props.icons} ></i></span>
      <div className="card-body">
        <h5 className="card-title fw-bolder">{props.title}</h5>
        <p className="fs-7  card-text ">{props.description}</p>
      </div>
    </div>
    
    )
};

export const Work = ({
  image,
  title,
  discription,
  footer
})=>{
    return (
    
  <div className="card card-work m-2 h-100 ">
    <img srcSet={image} className="card-img-top " alt="..."/>
    <div className="card-body">
      <h5 className="card-title fs-6 fs-sm-5 fs-md-4 fs-lg-3">{title}</h5>
      <p className="card-text fs-6">{discription}</p>
      <button className="bg-primary rounded text-light" type="button">Voir le site</button>
    </div>
    <div className="card-footer ">
      <small className="text-body-secondary  ">{footer}</small>
    </div>
  </div>
 

    )
};