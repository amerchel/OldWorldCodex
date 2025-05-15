
import styles from "./App.module.css"

import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import {Navbar} from "./components/sections/navbar/Navbar.jsx";
import {Hero} from "./components/sections/hero/hero.jsx";
import {About} from "./components/sections/about/about.jsx";
import {Outro} from "./components/sections/outro/outro.jsx";
import {Footer} from "./components/sections/footer/footer.jsx";

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Outro />
    <Footer />
  </div>

}

export default App
