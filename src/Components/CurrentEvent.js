import React from "react";

function CurrentEvent() {
    return (
        <div className="event-info">
            <div className="event-details">
                <p>Where: Ayala High School in Chino Hills, California</p>
                <p>When: September 7th, 2024, from 10 AM to 9 PM</p>
                <p>
                    How much: Ticket pricing will be announced when they go on
                    sale.
                </p>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.9203383200343!2d-117.73409582428594!3d33.99457987317868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c332ac0210843b%3A0x29d10f89e979d176!2sRuben%20S.%20Ayala%20High%20School!5e0!3m2!1sen!2sus!4v1721087665452!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                className="event-map"
                title="Event Map"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

export default CurrentEvent;
