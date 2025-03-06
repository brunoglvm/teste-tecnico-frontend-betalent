import styles from "./header.module.css";
import Logo from "@/assets/logo.svg?react";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} aria-label="Logo BeTalent" />
    </header>
  );
}
