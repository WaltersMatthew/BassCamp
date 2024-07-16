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
                    <p className="question">Do I need to bring a drum?</p>
                    <p className="answer">
                        The more the merrier! We will provide as many drums as
                        we are able, however, if you can bring a drum in case we
                        don't have enough, we would love to have you bring it
                        along
                    </p>
                </div>
                <div className="qna">
                    <p className="question">What do I need to bring?</p>
                    <p className="answer">
                        Water, hat, sunscreen, earplugs, mallets. In that order
                        of importance.
                    </p>
                </div>
                <div className="qna">
                    <p className="question">How much is it?</p>
                    <p className="answer">
                        Still trying to nail down those exact details. We'll let
                        you know as soon as the information is set in stone
                    </p>
                </div>
                <div className="qna">
                    <p className="question">What about music?</p>
                    <p className="answer">
                        We will be releasing music closer to the event. It will
                        entirely written by our staff specifically for Bass Camp
                        and hopefully be something that you can use as you
                        continue your learning journey.
                    </p>
                </div>
                <div className="qna">
                    <p className="question">What about parking?</p>
                    <p className="answer">
                        Ayala has ample parking in their student and staff lots
                        that will be available for use at no cost.
                    </p>
                </div>
                <div className="qna">
                    <p className="question">Can my parents watch?</p>
                    <p className="answer">
                        Of course! This is an open camp, anyone is welcome to
                        walk around and watch, but to participate you must be
                        registered and paid up.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
