import react from "react";

import "./style.css";

export const GlobalHeader:react.FC = () => {
    return <div className="global-header__container">
        <div className="global-header__logo">
            <img src="/static/images/easy-logo.png" alt="" width={69} />
        </div>
        <div className="global-header__button">
            Выйти
        </div>
    </div>
}