import "./App.css";

import "./index.css";
import About from "./Components/About";
import CurrentEvent from "./Components/CurrentEvent";
import Lineup from "./Components/Lineup";
// import GoogleForm from "./Components/GoogleForm";
import Header from "./Components/Header";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import Insta from "./Components/Insta";
import EventbriteLink from "./Components/EventbriteLink";

export default function App() {
    return (
        <div>
            <div className="main">
                <Header />
                {/* <CurrentEvent /> */}
                <About />
                <Lineup />
                {/* <EventbriteLink /> */}
                <FAQ />
                <Insta />
                <Contact />
            </div>
            <footer class="footer">
                <p class="footer-text">
                    <a href="https://waltersmatthew.vercel.app/">
                        Website by Walt, all art by Lauryn Bremner
                    </a>
                </p>
            </footer>
        </div>
    );
}
