
import styles from "./App.module.css"

import "@fontsource/roboto"
import "@fontsource/outfit"
import "@fontsource/dm-sans"
import {Navbar} from "./components/navbar/Navbar.jsx";
import {Hero} from "./components/hero/hero.jsx";

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Hero />
  </div>

}

export default App
