import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { LoggedIn, AuthButton, Value, Link } from '@solid/react';

export default function Header() {
  return (
    <header className="au-c-main-header">
        <div className="au-c-main-header__title-group">
            <div tabIndex="-1" className="au-u-hidden-visually ember-sr-only ember-sr-only-focusable" id="ember-a11y-refocus-nav-message">
                Nieuwe pagina geladen. Je kan nu verder navigeren.
            </div>
            <a href="https://www.vlaanderen.be/nl" className="au-c-brand au-c-brand--link ">
                <div className="au-c-brand__logo ex-header-icon">
                    <svg role="img" id="leeuw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.61 31.05" aria-labelledby="logoVlaanderen" aria-hidden="true">
                        <title id="logoVlaanderen">Logo Vlaanderen</title>
                        <path id="Logo_Vlaanderen" data-name="Logo Vlaanderen" d="M19.61,16c-1.08-.82-1.59,0-2.27,0s-1.12-1-1.56-.75c-0.85.43,0.34,2,.86,2.27a12.51,12.51,0,0,0,1.18.59,1.72,1.72,0,0,1,1,1.55,3,3,0,0,1,0,.75c-0.31,1.32-2.64,2.52-4,1.61a3,3,0,0,1-1.4-2c-0.36-1.73-1.62-3-2-4.7-0.25-1-.43-2.12-0.7-3.15S10.17,10,9.94,9A27.44,27.44,0,0,0,9,5.92C7.71,2.61,7.14,2.85,7.14,2.85s0.46,0.92,2.15,9A47.8,47.8,0,0,0,10.42,17c0.16,0.42.44,1.32,0.62,1.72,0.54,1.16,2,2.92,2.05,4.51,0.05,0.92.16,1.68,0.18,2.37a7.37,7.37,0,0,0,.24,1.4c0.35,1,3.14,4.09,6.1,4.09V28.68a10.88,10.88,0,0,1-5.79-1.82,6.37,6.37,0,0,1,.35-1.7,2.78,2.78,0,0,1,2.39-1.94,17.91,17.91,0,0,1,3,.31V16ZM6.82,7.36c-0.11,1.77-2.87,4.2-3.73,5.75A11.43,11.43,0,0,0,2,15.95a7.53,7.53,0,0,0,.62,4.67c0.91,2.18-.12,3,0.59,2.54,0.88-.72.75-2.39,0.68-3.43a14.77,14.77,0,0,1,0-2.82A13.29,13.29,0,0,1,6.3,11.58a4.84,4.84,0,0,0,.52-4.22m0.56,5s0.29,1.4-1,5c-3.26,9.45,3,10.34,4.74,12.56,0,0,.69-1-2.14-4-1-1.12-2-3.6-1.15-7.15,1.17-5.13-.5-6.39-0.5-6.39M1.21,6.2A4.53,4.53,0,0,1,1,4.7C1.2,2.48,3.23,1.58,3.73,1.25A2.7,2.7,0,0,0,4.76,0,3,3,0,0,1,3.55,3.67,6.06,6.06,0,0,0,1.21,6.2M6.32,4.05c0.11,0.23,1,1.45-2.48,4.27s-2.36,4.84-2.36,4.84-3.66-2,.56-5.53S5.39,3.43,5.39,3.43a1.05,1.05,0,0,1,.93.63m4.46,1.08c0.59,0.08,1,1.92,2.35,2.32,1,0.29,2.08.13,2.32,0.74a0.52,0.52,0,0,0,.37.92C16.21,8,16.4,3.88,10.79,5.14ZM12.64,6c0-.13.12,0,0.27-0.12a1.66,1.66,0,0,1,.59-0.48,1,1,0,0,1,.62,0c0.12,0,0,.33,0,0.4s-0.74-.09-0.74.32c0,0.67.91,0,1.38,0,0.23,1.64-2.48,1.19-2.08-.16h0Z"></path>
                    </svg>
                </div>
                <p className="au-c-brand__logotype">
                    <span className="au-c-brand__main">Vlaanderen</span>
                </p>
            </a>

            <RouterLink className="ember-view au-c-main-header__title au-c-main-header__title--link" to="/">Home</RouterLink>
            <RouterLink className="ember-view au-c-main-header__title au-c-main-header__title--link" to="/profile">Profiel</RouterLink>
            <RouterLink className="ember-view au-c-main-header__title au-c-main-header__title--link" to="/new-declaration">Declareer</RouterLink>

            <a href="#content" className="au-c-main-header__skiplink">Naar de hoofdinhoud</a>
        </div>

        <nav className="au-c-main-header__actions">
            <ul className="au-c-list-horizontal">
                <LoggedIn>
                    <li className="au-c-list-horizontal__item">
                        <Link class="nav-link" href="user"> Welkom, <Value src="user.name"/></Link>     
                    </li>
                </LoggedIn>
                <li className="au-c-list-horizontal__item">
                    <AuthButton popup="https://solid.github.io/solid-auth-client/dist/popup.html" login="Inloggen" logout="Uitloggen"/>
                </li>
            </ul>
        </nav>
    </header>
  );
}