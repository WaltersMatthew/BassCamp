import "./App.css";

import "./index.css";
import About from "./Components/About";
import CurrentEvent from "./Components/CurrentEvent";
import Lineup from "./Components/Lineup";
import GoogleForm from "./Components/GoogleForm";
import Header from "./Components/Header";
import FAQ from "./Components/FAQ";

export default function App() {
    return (
        <div>
            <div className="main">
                <Header />
                <CurrentEvent />
                <About />
                <Lineup />
                <GoogleForm />
                <FAQ />
            </div>
            <footer class="footer">
                <p class="footer-text">
                    <a href="https://waltersmatthew.vercel.app/">
                        Website by Walt
                    </a>
                </p>
            </footer>
        </div>
    );
}
