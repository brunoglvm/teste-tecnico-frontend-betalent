import styles from "./table-header.module.css";

export function TableHeader() {
  return (
    <thead className={styles.headerContent}>
      <tr>
        <th className={styles.img}>Foto</th>
        <th className={styles.name}>Nome</th>
        <th className={styles.job}>Cargo</th>
        <th className={styles.admissionDate}>Data de Admissão</th>
        <th className={styles.phone}>Telefone</th>
        <th className={styles.circleColumn}>
          <div className={styles.circle} />
        </th>
      </tr>
    </thead>
  );
}
