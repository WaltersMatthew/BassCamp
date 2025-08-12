import React from "react";

function CurrentEvent() {
    return (
        <div className="event-info">
            <div className="event-details">
                <p>Where: Great Oak High School in Temecula, California</p>
                <p>
                    When: August 30 (10 AM – 9 PM) and August 31 (10 AM – 6 PM)
                </p>
                <p>
                    How much: $50 for standard admission, +$20 for T-shirt
                    preorder, +$50 for VIP experience (T-shirt preorder and
                    30min 1-on-1 lesson during Camp)
                </p>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.9203383200343!2d-117.73409582428594!3d33.99457987317868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c332ac0210843b%3A0x29d10f89e979d176!2sRuben%20S.%20Great%20Oak%20High%20School!5e0!3m2!1sen!2sus!4v1721087665452!5m2!1sen!2sus"
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
