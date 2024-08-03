import React from "react";

export default function Header() {
    return (
        <div>
            <div className="header-wrapper">
                <img
                    className="header-font"
                    src="../BlackFont.png"
                    alt="Bass Camp"
                />
            </div>
            <div className="button-container">
                <a
                    href="https://www.eventbrite.com/e/bass-camp-registration-948956794317?aff=oddtdtcreator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                >
                    Register Here
                </a>
            </div>
        </div>
    );
}
