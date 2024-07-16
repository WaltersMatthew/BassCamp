import React from "react";
import "../App.css";

function GoogleForm() {
    return (
        <div className="google-form-button-container">
            <p className="form-title">Sign Up for Bass Camp 2024</p>
            <p>
                This is not registration for the event. This is only an interest
                form letting us know if this is an event you'd want to attend
                and giving us a few ideas about how to serve you best. An
                official registration form will follow soon and we'll make sure
                you get it.
            </p>
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeairSQ4wzxcC_FU8oYamYsdV6EY60R1RDR3nq7MB4B8ppHxg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="google-form-button"
            >
                Sign Up Here
            </a>
        </div>
    );
}

export default GoogleForm;
