import React from "react";

const FAQ = () => {
    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-content">
                <p>
                    We covered the where and the when up top so here's more info
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
                    <p className="question">Will we be practicing marching?</p>
                    <p className="answer">
                        No! This will be strictly a music camp focused on
                        getting your hands ready to show off in the coming
                        audition season. We will not be marching or practicing
                        movement.
                    </p>
                </div>
                <div className="qna">
                    <p className="question">What else do I need to bring?</p>
                    <p className="answer">
                        Water, hat, comfy shoes, sunscreen, earplugs, mallets,
                        and the best attitude you've got.
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
                {/* <div className="qna">
                    <p className="question">How much is it?</p>
                    <p className="answer">
                        The ticketing site can be found{" "}
                        <span>
                            <a href="https://www.eventbrite.com/e/bass-camp-registration-948956794317?aff=oddtdtcreator">
                                HERE!
                            </a>
                        </span>{" "}
                        Make sure to sign up early, as supplies and pricing will
                        change as we get closer to the event.
                    </p>
                </div> */}
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
                    <p className="question">
                        I play snare, can I bring my drum?
                    </p>
                    <p className="answer">
                        NOPE! No snares, tenors, or keyboard instruments. But if
                        you want to play bass with us, we'd love to have you,
                        and you're more than welcome to register and learn some
                        bass drum!
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
