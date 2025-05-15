
import styles from "./App.module.css"

import "@fontsource/roboto"
import "@fontsource/outfit"
import "@fontsource/dm-sans"
import {Navbar} from "./components/navbar/Navbar.jsx";
import {Hero} from "./components/hero/hero.jsx";
import {About} from "./components/about/about.jsx";

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
  </div>

}

export default App
