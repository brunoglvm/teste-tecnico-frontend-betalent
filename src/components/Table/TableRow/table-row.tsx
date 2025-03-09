import styles from "./table-row.module.css";

import { Employee } from "@/types/employee";
import { formatDate, formatPhone } from "@/utils/formatters";

interface TableRowProps {
  employee: Employee;
}

export function TableRow({ employee }: TableRowProps) {
  return (
    <tr className={styles.row}>
      <td>
        <img src={employee.image} alt={employee.name} className={styles.img} />
      </td>
      <td>{employee.name}</td>
      <td>{employee.job}</td>
      <td>{formatDate(employee.admission_date)}</td>
      <td>{formatPhone(employee.phone)}</td>
    </tr>
  );
}
