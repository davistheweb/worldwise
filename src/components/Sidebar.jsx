import styles from "@styles/Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copywrite}>
          &copy; {new Date().getFullYear()} by WorldWise Inc.{" "}
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
