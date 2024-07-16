import React from "react";

export default function Header() {
    return (
        <div>
            <p className="title">Bass Camp</p>
            <div className="google-form-button-container">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeairSQ4wzxcC_FU8oYamYsdV6EY60R1RDR3nq7MB4B8ppHxg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="google-form-button"
                >
                    Sign Up Here
                </a>
            </div>
        </div>
    );
}
