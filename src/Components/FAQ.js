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
                    <p className="question">What else do I need to bring?</p>
                    <p className="answer">
                        Water, hat, sunscreen, earplugs, mallets, and the best
                        attitude you've got.
                    </p>
                </div>
                <div className="qna">
                    <p className="question">But what will I WEAR??</p>
                    <p className="answer">
                        The most colorful funky outfit you own. I'm talking
                        yellow hats, orange dickies, pink track pants, old-man
                        hawaiian shirts, those neon green shoes in the back of
                        your closet. If it's gaudy and an ugly pattern, we want
                        to see it. This is camp, let's act like it.
                    </p>
                </div>
                <div className="qna">
                    <p className="question">How much is it?</p>
                    <p className="answer">
                        The fees for the event will be $35 by itself or $55 with
                        a T-shirt pre-order. The T-shirts will be $25 at the
                        event, but we can't guarantee stock/sizes if not
                        pre-ordered.
                    </p>
                </div>
                <div className="qna">
                    <p className="question">What about music?</p>
                    <p className="answer">
                        We will be releasing music closer to the event. It will
                        be entirely written by our staff, specifically for Bass
                        Camp, and hopefully be something that you can use with
                        other bass friends as you continue your learning
                        journey.
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
                        walk around and watch, but to participate you must be a
                        paying student.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
