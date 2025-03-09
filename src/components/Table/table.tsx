import { useEffect, useState } from "react";
import styles from "./table.module.css";

import { TableHeader } from "@/components/Table/TableHeader/table-header";
import {
  TableRow,
  TableRowSkeleton,
} from "@/components/Table/TableRow/table-row";

import { Employee as EmployeeType } from "@/types/employee";
import { getEmployees } from "@/services/api/employees-api";

type Props = {
  searchQuery: string;
};

export function Table({ searchQuery }: Props) {
  const [employees, setEmployees] = useState<EmployeeType[]>([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (error) {
        console.error("Erro ao buscar funcionários:", error);
      }
      isLoading(false);
    };

    fetchEmployees();
  }, []);

  const filteredEmployees = employees.filter(
    (employee) =>
      searchQuery === "" ||
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.job.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.phone.includes(searchQuery)
  );

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <TableHeader />
        <tbody>
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <TableRowSkeleton key={index} />
              ))
            : filteredEmployees.map((employee) => (
                <TableRow key={employee.id} employee={employee} />
              ))}
        </tbody>
      </table>
    </div>
  );
}
