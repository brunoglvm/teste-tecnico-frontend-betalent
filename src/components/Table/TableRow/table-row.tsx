import { useState } from "react";
import styles from "./table-row.module.css";

import { Employee } from "@/types/employee";
import { formatDate, formatPhone } from "@/utils/formatters";

import ChevronUp from "@/assets/icons/chevron-up.svg?react";
import ChevronDown from "@/assets/icons/chevron-down.svg?react";

type Props = {
  employee: Employee;
};

export function TableRow({ employee }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <tr className={styles.row}>
        <td>
          <img
            src={employee.image}
            alt={employee.name}
            className={styles.img}
          />
        </td>
        <td className={styles.name}>{employee.name}</td>
        <td className={styles.job}>{employee.job}</td>
        <td className={styles.admissionDate}>
          {formatDate(employee.admission_date)}
        </td>
        <td className={styles.phone}>{formatPhone(employee.phone)}</td>

        {/* Mobile */}
        <td className={styles.chevronContainer}>
          <button
            className={styles.chevronButton}
            onClick={toggleDetails}
            aria-label={isOpen ? "Fechar detalhes" : "Abrir detalhes"}
          >
            {isOpen ? (
              <ChevronUp width={32} height={32} />
            ) : (
              <ChevronDown width={32} height={32} />
            )}
          </button>
        </td>
      </tr>

      <tr className={`${styles.detailsRow} ${isOpen ? styles.open : ""}`}>
        <td colSpan={3}>
          <div className={styles.detailsContent}>
            <h3>
              <span className={styles.highlight}>Cargo</span> {employee.job}
            </h3>
            <h3>
              <span className={styles.highlight}>Data de Admissão</span>{" "}
              {formatDate(employee.admission_date)}
            </h3>
            <h3>
              <span className={styles.highlight}>Telefone</span>{" "}
              {formatPhone(employee.phone)}
            </h3>
          </div>
        </td>
      </tr>
    </>
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
