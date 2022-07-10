import React from 'react';
import {useNavigate} from "react-router-dom";

const AboutPage: React.FC = () => {
    const navigate = useNavigate();

    const returnToMainPage = () => {
        navigate("/");
    }
    return (
        <>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet deleniti dicta id maxime molestias quos
                reprehenderit tempore unde veniam vero?
            </p>
            <button className="btn" onClick={returnToMainPage}>Вернуться к списку дел</button>
        </>
    );
};

export default AboutPage;
