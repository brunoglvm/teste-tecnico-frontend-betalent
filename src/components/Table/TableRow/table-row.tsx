import styles from "./table-row.module.css";

import { Employee } from "@/types/employee";
import { formatDate, formatPhone } from "@/utils/formatters";

type Props = {
  employee: Employee;
};

export function TableRow({ employee }: Props) {
  return (
    <tr className={styles.row}>
      <td>
        <img src={employee.image} alt={employee.name} className={styles.img} />
      </td>
      <td className={styles.name}>{employee.name}</td>
      <td className={styles.job}>{employee.job}</td>
      <td className={styles.admissionDate}>
        {formatDate(employee.admission_date)}
      </td>
      <td className={styles.phone}>{formatPhone(employee.phone)}</td>
      <td className={styles.circleColumn}></td>
    </tr>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className={styles.row}>
      <td>
        <div className={styles.imgSkeleton} />
      </td>
      <td>
        <div className={styles.nameSkeleton} />
      </td>
      <td>
        <div className={styles.jobSkeleton} />
      </td>
      <td>
        <div className={styles.admissionDateSkeleton} />
      </td>
      <td>
        <div className={styles.phoneSkeleton} />
      </td>
      <td className={styles.circleColumn}></td>
    </tr>
  );
}
