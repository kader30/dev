import GitHubUserInfo from "./Modal";
import { useState } from "react";

export const Header = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <header className="d-flex image-container align-items-center text-light">
            <div className="container text-center mx-5  ">
                <h1 className="fw-bolder ">
                    Bonjour, je suis John Doe
                </h1>
                <h2 className="fw-bold">
                    Développeur web Full stuck
                </h2>
                <button type="button" className="btn btn-danger text-light" onClick={() => setShowModal(true)} >
                    En savoir plus
                </button>
                <div>
                </div>
            </div>
            <GitHubUserInfo
                show={showModal}
                onClose={() => setShowModal(false)}
            />
        </header>

    )
};