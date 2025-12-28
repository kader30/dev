import john from "../Images/john-doe-about.jpg"
export default function About() {
    return (
        <section className="container my-5">
            <div className="card shadow p-4">
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="section-title"><strong>À propos</strong></h4>
                        <img
                            srcSet={john}
                            className="img-fluid mb-3"
                            alt="profile"
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                            necessitatibus consectetur tempore perferendis nostrum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                            neque at?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                            necessitatibus consectetur tempore perferendis nostrum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                            neque at?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                            neque at?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                            neque at? Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                            neque at?
                        </p>
                        <small className="card-text">Last updated 3 mins ago</small>
                    </div>

                    <div className="col-md-6">
                        <h4 className="section-title"><strong>Mes compétences</strong></h4>

                        <p>HTML5 90%</p>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-danger" style={{ width: "90%" }} />
                        </div>

                        <p>CSS3 80%</p>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-info" style={{ width: "80%" }} />
                        </div>

                        <p>JavaScript 70%</p>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-warning" style={{ width: "70%" }} />
                        </div>

                        <p>PHP 60%</p>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-success" style={{ width: "60%" }} />
                        </div>

                        <p>React 50%</p>
                        <div className="progress">
                            <div className="progress-bar bg-primary" style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}