import { useState, useEffect } from "react";
import styles from "./search-bar.module.css";
import Search from "@/assets/icons/search.svg?react";

type Props = {
  onSearch: (query: string) => void;
};

export function SearchBar({ onSearch }: Props) {
  const DELAY = 300;
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(inputValue);
    }, DELAY);
    return () => clearTimeout(timeout);
  }, [inputValue, onSearch]);

  return (
    <div className={styles.container}>
      <Search className={styles.searchIcon} aria-label="Pesquisar" />
      <input
        type="text"
        className={styles.input}
        placeholder="Pesquisar"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
