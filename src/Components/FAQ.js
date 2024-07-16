import React from "react";

const FAQ = () => {
    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-content">
                <p>
                    We covered the where and the when up top so here's more info
                    <div> (9/7/24, 10a-9p @ Ayala. In case you forgot)</div>
                </p>

                <div className="qna">
                    <p>Do I need to bring a drum?</p>
                    <p>
                        The more the merrier! We will provide drums, however, if
                        you are able to bring a drum in case we don't have
                        enough, we would love to have you bring it along
                    </p>
                </div>
                <div className="qna">
                    <p>What do I need to bring?</p>
                    <p>Water, hat, sunscreen, earplugs, mallets.</p>
                    <p>In that order of importance.</p>
                </div>
                <div className="qna">
                    <p>How much is it?</p>
                    <p>
                        Still trying to nail down those exact details. We'll let
                        you know as soon as the information is set in stone
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
