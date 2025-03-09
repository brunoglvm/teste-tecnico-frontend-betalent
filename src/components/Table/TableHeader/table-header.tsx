import styles from "./table-header.module.css";

export function TableHeader() {
  return (
    <thead className={styles.headerContent}>
      <tr>
        <th>Foto</th>
        <th>Nome</th>
        <th>Cargo</th>
        <th>Data de Admissão</th>
        <th>Telefone</th>
      </tr>
    </thead>
  );
}
