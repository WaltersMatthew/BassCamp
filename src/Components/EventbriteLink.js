import React from "react";

const EventbriteLink = () => {
    return (
        <div className="contact-container">
            <h2>Get Signed Up!</h2>
            <div className="faceless-wrapper">
                <img
                    src="../FacelessLogo.png"
                    alt="a cartoon bass drum with the words 'bass camp' on the drumhead"
                />
            </div>
            <p>
                Use our Eventbrite page to register, pre-order your t-shirt, or
                sign up for the VIP experience that includes a 30 minute private
                lesson with one of our instructors.
            </p>
            <div className="button-container">
                <a
                    href="https://www.eventbrite.com/e/bass-camp-2025-registration-1528673045229"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                >
                    Register Here
                </a>
            </div>
        </div>
    );
};

export default EventbriteLink;
