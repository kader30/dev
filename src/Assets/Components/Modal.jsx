import { useEffect, useState } from "react";
import { Modal, Button, Spinner } from 'react-bootstrap';


function GitHubUserInfo({ show, onClose }) {
    // if(!show) return null;
    const GITHUB_API_URL = "https://api.github.com/users/github-john-doe";


    const [user, setUser] = useState(null);     // holds user data
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!show) return;
        const fetchUser = async () => {
            try {
                const response = await fetch(GITHUB_API_URL);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);

                }

                const data = await response.json();
                setUser(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);

            };
        }

        fetchUser();
    }, [show]); // run once on component mount

    if (loading) return;
    if (error) return <p>Error fetching user: {error}</p>;

    return (



        <Modal backdrop="static" size="lg" contentClassName="bg-dark text-light justify-content-center border border-secondary my-5  " show={show} onHide={onClose}>
            <Modal.Header className="border-secondary btn-close-bg-light " closeButton  >
                <Modal.Title>
                    Mon profil GitHub</Modal.Title>
            </Modal.Header>

            <Modal.Body className="d-flex flex-wrap flex-md-nowrap  justify-content-center flex-space-betwen" >

                <div className="justify-content-cener">


                    <img className="pt-3"
                        srcSet={user.avatar_url}
                        alt={`${user.login} avatar`}
                        width="100%"

                    />
                </div>
                <div className="mx-auto px-4 ">
                    <p className="border-bottom border-secondary p-2 mb-1 fs-6"> <i className="bi bi-person pe-1"></i> <a href="http://" target="_blank" rel="noopener noreferrer">{user.name || user.login}</a></p>
                    <p className="border-bottom border-secondary p-2 mb-1 py-2 ">
                        <i className="bi bi-geo-alt"></i> {user.location}
                    </p>

                    <p className="border-bottom border-secondary p-2 mb-1"><i className="bi bi-card-text pe-1 " > </i>{user.bio}</p>

                    <p className="border-bottom border-secondary p-2 mb-1">
                        <i className="bi bi-box pe-1"> </i> Repositories : {user.public_repos}
                    </p>


                    <p className="border-bottom border-secondary p-2 mb-1">
                        <i className="bi bi-people pe-1"></i> Followers : {user.followers}
                    </p>

                    <p className="mb-4 p-2">
                        <i className="bi bi-people pe-1"></i> Following :  {user.following}
                    </p>


                </div>
            </Modal.Body>
            <Modal.Footer className="border-secondary">
                <button onClick={onClose} type="button" className="btn btn-secondary">Fermer</button>

            </Modal.Footer>






        </Modal>

    )

}
export default GitHubUserInfo;