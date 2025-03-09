import styles from "./search-bar.module.css";
import Search from "@/assets/icons/search.svg?react";

type Props = {
  onSearch: (query: string) => void;
};

export function SearchBar({ onSearch }: Props) {
  return (
    <div className={styles.container}>
      <Search className={styles.searchIcon} aria-label="Pesquisar" />
      <input
        type="text"
        className={styles.input}
        placeholder="Pesquisar"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
