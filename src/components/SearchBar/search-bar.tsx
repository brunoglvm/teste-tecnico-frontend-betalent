import styles from "./search-bar.module.css";
import Search from "@/assets/icons/search.svg?react";

export function SearchBar() {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} placeholder="Pesquisar" />
      <Search className={styles.searchIcon} aria-label="Pesquisar" />
    </div>
  );
}
