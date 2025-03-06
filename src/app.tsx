import styles from "./app.module.css";

import { Header } from "@/components/Header/header";
import { SearchBar } from "@/components/SearchBar/search-bar";

export default function App() {
  return (
    <>
      <Header />
      <section className={styles.searchWrapper}>
        <div className={styles.titleContainer}>
          <h1>Funcionários</h1>
        </div>
        <SearchBar />
      </section>
    </>
  );
}
