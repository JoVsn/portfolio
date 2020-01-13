import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
    useEffect(() => {
        document.title = "Jordan — Page Not Found";
    }, []);

    return (
        <div className="NotFound">
            <p>Oops, vous vous êtes trompé de page.</p>
            <Link to="/">
                <button className="button-bordered dark-purple">
                    Retour à la page d'accueil
                </button>
            </Link>
        </div>
    );
};

export default NotFound;
