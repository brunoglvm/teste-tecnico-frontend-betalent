import { useState } from "react";
import styles from "./app.module.css";

import { Header } from "@/components/Header/header";
import { SearchBar } from "@/components/SearchBar/search-bar";
import { Table } from "@/components/Table/table";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header />
      <div className={styles.container}>
        <section className={styles.searchSection}>
          <div className={styles.titleContainer}>
            <h1>Funcionários</h1>
          </div>
          <SearchBar onSearch={setSearchQuery} />
        </section>
        <Table searchQuery={searchQuery} />
      </div>
    </>
  );
}
