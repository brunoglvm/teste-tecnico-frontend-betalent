import { Header } from "@/components/Header/header";
import { SearchBar } from "./components/SearchBar/search-bar";

export default function App() {
  return (
    <div>
      <Header />
      <h1 style={{ padding: "3rem 1.25rem" }}>Funcionários</h1>
      <SearchBar />
    </div>
  );
}
